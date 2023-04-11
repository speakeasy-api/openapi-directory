import { SpeakeasyBase } from "../../../internal/utils";
import { PostLaunchActionExecutionStatusEnum } from "./postlaunchactionexecutionstatusenum";
import { SsmDocument } from "./ssmdocument";
import { SsmDocumentTypeEnum } from "./ssmdocumenttypeenum";
/**
 * Launch Status of the Job Post Launch Actions.
 */
export declare class JobPostLaunchActionsLaunchStatus extends SpeakeasyBase {
    executionID?: string;
    executionStatus?: PostLaunchActionExecutionStatusEnum;
    failureReason?: string;
    ssmDocument?: SsmDocument;
    ssmDocumentType?: SsmDocumentTypeEnum;
}
