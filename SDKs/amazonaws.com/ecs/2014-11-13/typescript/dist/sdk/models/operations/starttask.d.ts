import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartTaskXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113StartTask = "AmazonEC2ContainerServiceV20141113.StartTask"
}
export declare class StartTaskRequest extends SpeakeasyBase {
    startTaskRequest: shared.StartTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTaskXAmzTargetEnum;
}
export declare class StartTaskResponse extends SpeakeasyBase {
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
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    startTaskResponse?: shared.StartTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
