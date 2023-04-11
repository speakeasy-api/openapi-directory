import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Worker orientation measured in units clockwise from north.
 */
export declare class CreateWorkerRequestBodyOrientation extends SpeakeasyBase {
    degrees?: number;
}
/**
 * Supported coordinates for worker position.
 */
export declare class CreateWorkerRequestBodyPosition extends SpeakeasyBase {
    cartesianCoordinates?: shared.CartesianCoordinates;
}
/**
 * Properties of the worker that are provided by the vendor FMS.
 */
export declare class CreateWorkerRequestBodyVendorProperties extends SpeakeasyBase {
    /**
     * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
     */
    vendorAdditionalFixedProperties?: string;
    /**
     * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
     */
    vendorAdditionalTransientProperties?: string;
    /**
     * The worker ID defined by the vendor FMS.
     */
    vendorWorkerId?: string;
    /**
     * The worker IP address defined by the vendor FMS.
     */
    vendorWorkerIpAddress?: string;
}
export declare class CreateWorkerRequestBody extends SpeakeasyBase {
    /**
     * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
     */
    additionalFixedProperties?: string;
    /**
     * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
     */
    additionalTransientProperties?: string;
    /**
     * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
     */
    clientToken?: string;
    /**
     * Full ARN of the worker fleet.
     */
    fleet: string;
    /**
     * Human friendly name of the resource.
     */
    name: string;
    /**
     * Worker orientation measured in units clockwise from north.
     */
    orientation?: CreateWorkerRequestBodyOrientation;
    /**
     * Supported coordinates for worker position.
     */
    position?: CreateWorkerRequestBodyPosition;
    /**
     * Properties of the worker that are provided by the vendor FMS.
     */
    vendorProperties?: CreateWorkerRequestBodyVendorProperties;
}
export declare class CreateWorkerRequest extends SpeakeasyBase {
    requestBody: CreateWorkerRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorkerResponse extends SpeakeasyBase {
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
    createWorkerResponse?: shared.CreateWorkerResponse;
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
