import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ApplyPendingMaintenanceActionXAmzTargetEnum {
    AmazonDMSv20160101ApplyPendingMaintenanceAction = "AmazonDMSv20160101.ApplyPendingMaintenanceAction"
}
export declare class ApplyPendingMaintenanceActionRequest extends SpeakeasyBase {
    applyPendingMaintenanceActionMessage: shared.ApplyPendingMaintenanceActionMessage;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ApplyPendingMaintenanceActionXAmzTargetEnum;
}
export declare class ApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    applyPendingMaintenanceActionResponse?: shared.ApplyPendingMaintenanceActionResponse;
    contentType: string;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
