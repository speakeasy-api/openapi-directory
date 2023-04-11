import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * State of the destination.
 */
export declare enum CreateDestinationRequestBodyStateEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Decommissioned = "DECOMMISSIONED"
}
export declare class CreateDestinationRequestBody extends SpeakeasyBase {
    /**
     * JSON document containing additional fixed properties regarding the destination
     */
    additionalFixedProperties?: string;
    /**
     * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
     */
    clientToken?: string;
    /**
     * Human friendly name of the resource.
     */
    name: string;
    /**
     * Site ARN.
     */
    site: string;
    /**
     * State of the destination.
     */
    state?: CreateDestinationRequestBodyStateEnum;
}
export declare class CreateDestinationRequest extends SpeakeasyBase {
    requestBody: CreateDestinationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDestinationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createDestinationResponse?: shared.CreateDestinationResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
     * ValidationException
     */
    validationException?: any;
}
