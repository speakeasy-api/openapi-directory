import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopTaskXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113StopTask = "AmazonEC2ContainerServiceV20141113.StopTask"
}
export declare class StopTaskRequest extends SpeakeasyBase {
    stopTaskRequest: shared.StopTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTaskXAmzTargetEnum;
}
export declare class StopTaskResponse extends SpeakeasyBase {
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
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    stopTaskResponse?: shared.StopTaskResponse;
}
