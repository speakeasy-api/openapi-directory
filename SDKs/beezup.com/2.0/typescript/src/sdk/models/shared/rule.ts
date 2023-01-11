import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptimisationActionNameEnum } from "./optimisationactionnameenum";
import { RuleLastExecutionStatusEnum } from "./rulelastexecutionstatusenum";
import { RuleLinks } from "./rulelinks";



export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName: OptimisationActionNameEnum;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastExecutionStatus" })
  lastExecutionStatus?: RuleLastExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lastExecutionUtcDate" })
  lastExecutionUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: RuleLinks;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position: number;

  @SpeakeasyMetadata({ data: "json, name=reportFilterId" })
  reportFilterId: string;

  @SpeakeasyMetadata({ data: "json, name=ruleId" })
  ruleId: string;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "json, name=validityEndUtcDate" })
  validityEndUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=validityStartUtcDate" })
  validityStartUtcDate?: Date;
}
