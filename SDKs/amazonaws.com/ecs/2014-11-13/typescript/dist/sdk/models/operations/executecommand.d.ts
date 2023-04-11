import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExecuteCommandXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113ExecuteCommand = "AmazonEC2ContainerServiceV20141113.ExecuteCommand"
}
export declare class ExecuteCommandRequest extends SpeakeasyBase {
    executeCommandRequest: shared.ExecuteCommandRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteCommandXAmzTargetEnum;
}
export declare class ExecuteCommandResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
    executeCommandResponse?: shared.ExecuteCommandResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TargetNotConnectedException
     */
    targetNotConnectedException?: any;
}
