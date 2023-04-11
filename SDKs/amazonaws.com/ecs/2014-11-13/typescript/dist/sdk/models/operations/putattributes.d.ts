import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutAttributesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113PutAttributes = "AmazonEC2ContainerServiceV20141113.PutAttributes"
}
export declare class PutAttributesRequest extends SpeakeasyBase {
    putAttributesRequest: shared.PutAttributesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAttributesXAmzTargetEnum;
}
export declare class PutAttributesResponse extends SpeakeasyBase {
    /**
     * AttributeLimitExceededException
     */
    attributeLimitExceededException?: any;
    /**
     * ClusterNotFoundException
     */
    clusterNotFoundException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putAttributesResponse?: shared.PutAttributesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TargetNotFoundException
     */
    targetNotFoundException?: any;
}
