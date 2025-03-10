/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { RuntimeHintDetails } from "./runtimehintdetails";
import { Expose, Transform } from "class-transformer";

/**
 * <p>You can provide Amazon Lex V2 with hints to the phrases that a customer is likely to use for a slot. When a slot with hints is resolved, the phrases in the runtime hints are preferred in the resolution. You can provide hints for a maximum of 100 intents. You can provide a maximum of 100 slots.</p> <p>Before you can use runtime hints with an existing bot, you must first rebuild the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to improve recognition of slot values</a>.</p>
 */
export class RuntimeHints extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: RuntimeHintDetails, elemDepth: 2 })
  @Expose({ name: "slotHints" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, Record<string, RuntimeHintDetails>> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], RuntimeHintDetails);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  slotHints?: Record<string, Record<string, RuntimeHintDetails>>;
}
