import { SpeakeasyBase } from "../../../internal/utils";
import { PostLaunchActionsDeploymentTypeEnum } from "./postlaunchactionsdeploymenttypeenum";
import { SsmDocument } from "./ssmdocument";
/**
 * Post Launch Actions to executed on the Test or Cutover instance.
 */
export declare class PostLaunchActions extends SpeakeasyBase {
    cloudWatchLogGroupName?: string;
    deployment?: PostLaunchActionsDeploymentTypeEnum;
    s3LogBucket?: string;
    s3OutputKeyPrefix?: string;
    ssmDocuments?: SsmDocument[];
}
