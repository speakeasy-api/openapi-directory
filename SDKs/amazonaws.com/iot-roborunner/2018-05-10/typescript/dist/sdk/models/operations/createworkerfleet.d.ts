import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateWorkerFleetRequestBody extends SpeakeasyBase {
    /**
     * JSON blob containing additional fixed properties regarding the worker fleet
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
}
export declare class CreateWorkerFleetRequest extends SpeakeasyBase {
    requestBody: CreateWorkerFleetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorkerFleetResponse extends SpeakeasyBase {
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
    createWorkerFleetResponse?: shared.CreateWorkerFleetResponse;
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
