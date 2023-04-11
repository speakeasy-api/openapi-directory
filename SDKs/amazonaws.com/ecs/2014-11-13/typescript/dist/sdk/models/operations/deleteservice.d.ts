import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteServiceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteService = "AmazonEC2ContainerServiceV20141113.DeleteService"
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    deleteServiceRequest: shared.DeleteServiceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceXAmzTargetEnum;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    /**
     * ClusterNotFoundException
     */
    clusterNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteServiceResponse?: shared.DeleteServiceResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * ServiceNotFoundException
     */
    serviceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
