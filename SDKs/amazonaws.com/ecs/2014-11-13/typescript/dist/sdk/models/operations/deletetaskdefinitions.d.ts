import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTaskDefinitionsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteTaskDefinitions = "AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions"
}
export declare class DeleteTaskDefinitionsRequest extends SpeakeasyBase {
    deleteTaskDefinitionsRequest: shared.DeleteTaskDefinitionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTaskDefinitionsXAmzTargetEnum;
}
export declare class DeleteTaskDefinitionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteTaskDefinitionsResponse?: shared.DeleteTaskDefinitionsResponse;
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
}
