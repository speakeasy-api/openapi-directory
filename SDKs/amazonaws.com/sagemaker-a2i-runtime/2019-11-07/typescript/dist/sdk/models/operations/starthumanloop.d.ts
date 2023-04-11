import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
 */
export declare class StartHumanLoopRequestBodyDataAttributes extends SpeakeasyBase {
    contentClassifiers?: shared.ContentClassifierEnum[];
}
/**
 * An object containing the human loop input in JSON format.
 */
export declare class StartHumanLoopRequestBodyHumanLoopInput extends SpeakeasyBase {
    inputContent?: string;
}
export declare class StartHumanLoopRequestBody extends SpeakeasyBase {
    /**
     * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
     */
    dataAttributes?: StartHumanLoopRequestBodyDataAttributes;
    /**
     * The Amazon Resource Name (ARN) of the flow definition associated with this human loop.
     */
    flowDefinitionArn: string;
    /**
     * An object containing the human loop input in JSON format.
     */
    humanLoopInput: StartHumanLoopRequestBodyHumanLoopInput;
    /**
     * The name of the human loop.
     */
    humanLoopName: string;
}
export declare class StartHumanLoopRequest extends SpeakeasyBase {
    requestBody: StartHumanLoopRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartHumanLoopResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    startHumanLoopResponse?: shared.StartHumanLoopResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
