import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAttributesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteAttributes = "AmazonEC2ContainerServiceV20141113.DeleteAttributes"
}
export declare class DeleteAttributesRequest extends SpeakeasyBase {
    deleteAttributesRequest: shared.DeleteAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAttributesXAmzTargetEnum;
}
export declare class DeleteAttributesResponse extends SpeakeasyBase {
    /**
     * ClusterNotFoundException
     */
    clusterNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteAttributesResponse?: shared.DeleteAttributesResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TargetNotFoundException
     */
    targetNotFoundException?: any;
}
