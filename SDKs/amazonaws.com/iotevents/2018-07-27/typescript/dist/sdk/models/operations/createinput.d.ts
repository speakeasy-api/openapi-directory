import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The definition of the input.
 */
export declare class CreateInputRequestBodyInputDefinition extends SpeakeasyBase {
    attributes?: shared.Attribute[];
}
export declare class CreateInputRequestBody extends SpeakeasyBase {
    /**
     * The definition of the input.
     */
    inputDefinition: CreateInputRequestBodyInputDefinition;
    /**
     * A brief description of the input.
     */
    inputDescription?: string;
    /**
     * The name you want to give to the input.
     */
    inputName: string;
    /**
     * Metadata that can be used to manage the input.
     */
    tags?: shared.Tag[];
}
export declare class CreateInputRequest extends SpeakeasyBase {
    requestBody: CreateInputRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateInputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createInputResponse?: shared.CreateInputResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
