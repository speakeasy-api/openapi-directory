import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLoggingOptionUpdate
/** 
 * Describes CloudWatch logging option updates.
**/
export class CloudWatchLoggingOptionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionId" })
  cloudWatchLoggingOptionId: string;

  @SpeakeasyMetadata({ data: "json, name=LogStreamARNUpdate" })
  logStreamARNUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARNUpdate" })
  roleARNUpdate?: string;
}
