import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleExecutionReporting } from "./ruleexecutionreporting";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";



export class RuleExecutionReportings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executions", elemType: RuleExecutionReporting })
  executions?: RuleExecutionReporting[];

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult?: BeezUpCommonPaginationResult;
}
