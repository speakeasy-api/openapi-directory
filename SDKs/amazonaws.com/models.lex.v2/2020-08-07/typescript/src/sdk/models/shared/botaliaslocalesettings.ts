import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodeHookSpecification } from "./codehookspecification";



export class BotAliasLocaleSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codeHookSpecification" })
  codeHookSpecification?: CodeHookSpecification;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
