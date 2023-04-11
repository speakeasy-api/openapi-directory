import { SpeakeasyBase } from "../../../internal/utils";
import { HandlerErrorCodeEnum } from "./handlererrorcodeenum";
import { OperationEnum } from "./operationenum";
import { OperationStatusEnum } from "./operationstatusenum";
/**
 * Represents the current status of a resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html">Managing resource operation requests</a> in the <i>Amazon Web Services Cloud Control API User Guide</i>.
 */
export declare class ProgressEvent extends SpeakeasyBase {
    errorCode?: HandlerErrorCodeEnum;
    eventTime?: Date;
    identifier?: string;
    operation?: OperationEnum;
    operationStatus?: OperationStatusEnum;
    requestToken?: string;
    resourceModel?: string;
    retryAfter?: Date;
    statusMessage?: string;
    typeName?: string;
}
