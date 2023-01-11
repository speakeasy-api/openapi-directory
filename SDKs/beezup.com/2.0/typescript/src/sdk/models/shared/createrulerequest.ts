import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptimisationActionNameEnum } from "./optimisationactionnameenum";



export class CreateRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endUtcDate" })
  endUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=optimisationActionName" })
  optimisationActionName: OptimisationActionNameEnum;

  @SpeakeasyMetadata({ data: "json, name=reportFilterId" })
  reportFilterId: string;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "json, name=startUtcDate" })
  startUtcDate?: Date;
}
