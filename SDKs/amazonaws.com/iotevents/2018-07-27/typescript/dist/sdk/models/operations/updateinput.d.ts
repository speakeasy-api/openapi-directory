import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The definition of the input.
 */
export declare class UpdateInputRequestBodyInputDefinition extends SpeakeasyBase {
    attributes?: shared.Attribute[];
}
export declare class UpdateInputRequestBody extends SpeakeasyBase {
    /**
     * The definition of the input.
     */
    inputDefinition: UpdateInputRequestBodyInputDefinition;
    /**
     * A brief description of the input.
     */
    inputDescription?: string;
}
export declare class UpdateInputRequest extends SpeakeasyBase {
    requestBody: UpdateInputRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the input you want to update.
     */
    inputName: string;
}
export declare class UpdateInputResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateInputResponse?: shared.UpdateInputResponse;
}
