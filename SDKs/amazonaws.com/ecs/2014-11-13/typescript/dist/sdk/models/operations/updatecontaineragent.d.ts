import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateContainerAgentXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateContainerAgent = "AmazonEC2ContainerServiceV20141113.UpdateContainerAgent"
}
export declare class UpdateContainerAgentRequest extends SpeakeasyBase {
    updateContainerAgentRequest: shared.UpdateContainerAgentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateContainerAgentXAmzTargetEnum;
}
export declare class UpdateContainerAgentResponse extends SpeakeasyBase {
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
     * MissingVersionException
     */
    missingVersionException?: any;
    /**
     * NoUpdateAvailableException
     */
    noUpdateAvailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    updateContainerAgentResponse?: shared.UpdateContainerAgentResponse;
    /**
     * UpdateInProgressException
     */
    updateInProgressException?: any;
}
