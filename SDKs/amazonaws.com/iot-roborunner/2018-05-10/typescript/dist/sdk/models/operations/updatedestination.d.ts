import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * State of the destination.
 */
export declare enum UpdateDestinationRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Decommissioned = "DECOMMISSIONED"
}
export declare class UpdateDestinationRequestBody extends SpeakeasyBase {
    /**
     * JSON document containing additional fixed properties regarding the destination
     */
    additionalFixedProperties?: string;
    /**
     * Destination ARN.
     */
    id: string;
    /**
     * Human friendly name of the resource.
     */
    name?: string;
    /**
     * State of the destination.
     */
    state?: UpdateDestinationRequestBodyStateEnum;
}
export declare class UpdateDestinationRequest extends SpeakeasyBase {
    requestBody: UpdateDestinationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDestinationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateDestinationResponse?: shared.UpdateDestinationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
