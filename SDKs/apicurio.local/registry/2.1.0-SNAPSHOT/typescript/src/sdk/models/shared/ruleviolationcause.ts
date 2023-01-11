import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RuleViolationCause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}
