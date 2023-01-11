import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleViolationCause } from "./ruleviolationcause";



// RuleViolationError
/** 
 * All error responses, whether `4xx` or `5xx` will include one of these as the response
 * body.
**/
export class RuleViolationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=causes", elemType: RuleViolationCause })
  causes: RuleViolationCause[];

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
