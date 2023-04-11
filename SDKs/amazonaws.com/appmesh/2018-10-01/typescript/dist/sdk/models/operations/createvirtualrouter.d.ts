import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object representing the specification of a virtual router.
 */
export declare class CreateVirtualRouterRequestBodySpec extends SpeakeasyBase {
    serviceNames?: string[];
}
export declare class CreateVirtualRouterRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *
     * @remarks
     * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: string;
    /**
     * An object representing the specification of a virtual router.
     */
    spec: CreateVirtualRouterRequestBodySpec;
    /**
     * The name to use for the virtual router.
     */
    virtualRouterName: string;
}
export declare class CreateVirtualRouterRequest extends SpeakeasyBase {
    requestBody: CreateVirtualRouterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the service mesh in which to create the virtual router.
     */
    meshName: string;
}
export declare class CreateVirtualRouterResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createVirtualRouterOutput?: shared.CreateVirtualRouterOutput;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
