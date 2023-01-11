import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateRuleRequest
/** 
 * This update will replace the following values.
**/
export class UpdateRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endUtcDate" })
  endUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "json, name=startUtcDate" })
  startUtcDate?: Date;
}
