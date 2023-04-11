import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAppsListXAmzTargetEnum {
    AWSFMS20180101DeleteAppsList = "AWSFMS_20180101.DeleteAppsList"
}
export declare class DeleteAppsListRequest extends SpeakeasyBase {
    deleteAppsListRequest: shared.DeleteAppsListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppsListXAmzTargetEnum;
}
export declare class DeleteAppsListResponse extends SpeakeasyBase {
    contentType: string;
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
