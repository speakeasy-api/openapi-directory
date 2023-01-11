import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleExecutionReportingErrorTypeEnum } from "./ruleexecutionreportingerrortypeenum";
import { RuleExecutionReportingExecutionSourceEnum } from "./ruleexecutionreportingexecutionsourceenum";
import { RuleExecutionReportingLinks } from "./ruleexecutionreportinglinks";
import { OptimisationActionNameEnum } from "./optimisationactionnameenum";
import { RuleExecutionReportingStatusEnum } from "./ruleexecutionreportingstatusenum";



export class RuleExecutionReporting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeAffectedProductCount" })
  activeAffectedProductCount?: number;

  @SpeakeasyMetadata({ data: "json, name=affectedChannelCount" })
  affectedChannelCount?: number;

  @SpeakeasyMetadata({ data: "json, name=affectedProductCount" })
  affectedProductCount?: number;

  @SpeakeasyMetadata({ data: "json, name=completedUtcDate" })
  completedUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=errorType" })
  errorType?: RuleExecutionReportingErrorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=executionSource" })
  executionSource: RuleExecutionReportingExecutionSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: RuleExecutionReportingLinks;

  @SpeakeasyMetadata({ data: "json, name=optimisationActionName" })
  optimisationActionName?: OptimisationActionNameEnum;

  @SpeakeasyMetadata({ data: "json, name=reportUrl" })
  reportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ruleId" })
  ruleId: string;

  @SpeakeasyMetadata({ data: "json, name=ruleName" })
  ruleName: string;

  @SpeakeasyMetadata({ data: "json, name=startedUtcDate" })
  startedUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: RuleExecutionReportingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
