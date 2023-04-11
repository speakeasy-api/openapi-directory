import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeregisterJobDefinitionRequestBody extends SpeakeasyBase {
    /**
     * The name and revision (<code>name:revision</code>) or full Amazon Resource Name (ARN) of the job definition to deregister.
     */
    jobDefinition: string;
}
export declare class DeregisterJobDefinitionRequest extends SpeakeasyBase {
    requestBody: DeregisterJobDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeregisterJobDefinitionResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deregisterJobDefinitionResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
}
