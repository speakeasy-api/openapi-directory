import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Worker orientation measured in units clockwise from north.
 */
export declare class UpdateWorkerRequestBodyOrientation extends SpeakeasyBase {
    degrees?: number;
}
/**
 * Supported coordinates for worker position.
 */
export declare class UpdateWorkerRequestBodyPosition extends SpeakeasyBase {
    cartesianCoordinates?: shared.CartesianCoordinates;
}
/**
 * Properties of the worker that are provided by the vendor FMS.
 */
export declare class UpdateWorkerRequestBodyVendorProperties extends SpeakeasyBase {
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
export declare class UpdateWorkerRequestBody extends SpeakeasyBase {
    /**
     * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
     */
    additionalFixedProperties?: string;
    /**
     * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
     */
    additionalTransientProperties?: string;
    /**
     * Full ARN of the worker.
     */
    id: string;
    /**
     * Human friendly name of the resource.
     */
    name?: string;
    /**
     * Worker orientation measured in units clockwise from north.
     */
    orientation?: UpdateWorkerRequestBodyOrientation;
    /**
     * Supported coordinates for worker position.
     */
    position?: UpdateWorkerRequestBodyPosition;
    /**
     * Properties of the worker that are provided by the vendor FMS.
     */
    vendorProperties?: UpdateWorkerRequestBodyVendorProperties;
}
export declare class UpdateWorkerRequest extends SpeakeasyBase {
    requestBody: UpdateWorkerRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateWorkerResponse extends SpeakeasyBase {
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
    updateWorkerResponse?: shared.UpdateWorkerResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
