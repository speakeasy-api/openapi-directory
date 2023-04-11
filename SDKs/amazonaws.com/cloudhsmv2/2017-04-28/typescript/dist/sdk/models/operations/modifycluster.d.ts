import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyClusterXAmzTargetEnum {
    BaldrApiServiceModifyCluster = "BaldrApiService.ModifyCluster"
}
export declare class ModifyClusterRequest extends SpeakeasyBase {
    modifyClusterRequest: shared.ModifyClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyClusterXAmzTargetEnum;
}
export declare class ModifyClusterResponse extends SpeakeasyBase {
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
    modifyClusterResponse?: shared.ModifyClusterResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
