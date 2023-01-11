import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudWatchLoggingOptionDescription
/** 
 * Description of the CloudWatch logging option.
**/
export class CloudWatchLoggingOptionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CloudWatchLoggingOptionId" })
  cloudWatchLoggingOptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=LogStreamARN" })
  logStreamARN: string;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleARN: string;
}
