import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteComputeEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * The name or Amazon Resource Name (ARN) of the compute environment to delete.
     */
    computeEnvironment: string;
}
export declare class DeleteComputeEnvironmentRequest extends SpeakeasyBase {
    requestBody: DeleteComputeEnvironmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteComputeEnvironmentResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteComputeEnvironmentResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
}
