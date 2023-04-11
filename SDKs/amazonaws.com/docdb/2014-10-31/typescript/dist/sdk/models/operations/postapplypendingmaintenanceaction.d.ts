import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTApplyPendingMaintenanceActionActionEnum {
    ApplyPendingMaintenanceAction = "ApplyPendingMaintenanceAction"
}
export declare enum POSTApplyPendingMaintenanceActionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTApplyPendingMaintenanceActionRequest extends SpeakeasyBase {
    action: POSTApplyPendingMaintenanceActionActionEnum;
    requestBody?: Uint8Array;
    version: POSTApplyPendingMaintenanceActionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
