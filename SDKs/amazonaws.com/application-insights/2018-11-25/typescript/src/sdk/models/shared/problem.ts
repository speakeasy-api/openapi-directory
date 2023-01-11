import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeverityLevelEnum } from "./severitylevelenum";
import { StatusEnum } from "./statusenum";



// Problem
/** 
 * Describes a problem that is detected by correlating observations.
**/
export class Problem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AffectedResource" })
  affectedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Feedback" })
  feedback?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Insights" })
  insights?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceGroupName" })
  resourceGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=SeverityLevel" })
  severityLevel?: SeverityLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
