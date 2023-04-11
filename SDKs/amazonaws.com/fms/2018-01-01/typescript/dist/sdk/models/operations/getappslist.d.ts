import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAppsListXAmzTargetEnum {
    AWSFMS20180101GetAppsList = "AWSFMS_20180101.GetAppsList"
}
export declare class GetAppsListRequest extends SpeakeasyBase {
    getAppsListRequest: shared.GetAppsListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppsListXAmzTargetEnum;
}
export declare class GetAppsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAppsListResponse?: shared.GetAppsListResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
