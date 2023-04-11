import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteClusterXAmzTargetEnum {
    BaldrApiServiceDeleteCluster = "BaldrApiService.DeleteCluster"
}
export declare class DeleteClusterRequest extends SpeakeasyBase {
    deleteClusterRequest: shared.DeleteClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteClusterXAmzTargetEnum;
}
export declare class DeleteClusterResponse extends SpeakeasyBase {
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
    /**
     * CloudHsmTagException
     */
    cloudHsmTagException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteClusterResponse?: shared.DeleteClusterResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
