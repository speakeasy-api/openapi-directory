import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum InitializeClusterXAmzTargetEnum {
    BaldrApiServiceInitializeCluster = "BaldrApiService.InitializeCluster"
}
export declare class InitializeClusterRequest extends SpeakeasyBase {
    initializeClusterRequest: shared.InitializeClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: InitializeClusterXAmzTargetEnum;
}
export declare class InitializeClusterResponse extends SpeakeasyBase {
    /**
     * CloudHsmAccessDeniedException
     */
    cloudHsmAccessDeniedException?: any;
    /**
     * CloudHsmInternalFailureException
     */
    cloudHsmInternalFailureException?: any;
    /**
     * CloudHsmInvalidRequestException
     */
    cloudHsmInvalidRequestException?: any;
    /**
     * CloudHsmResourceNotFoundException
     */
    cloudHsmResourceNotFoundException?: any;
    /**
     * CloudHsmServiceException
     */
    cloudHsmServiceException?: any;
    contentType: string;
    /**
     * Success
     */
    initializeClusterResponse?: shared.InitializeClusterResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
