import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object representing the specification of a virtual router.
 */
export declare class UpdateVirtualRouterRequestBodySpec extends SpeakeasyBase {
    serviceNames?: string[];
}
export declare class UpdateVirtualRouterRequestBody extends SpeakeasyBase {
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
    spec: UpdateVirtualRouterRequestBodySpec;
}
export declare class UpdateVirtualRouterRequest extends SpeakeasyBase {
    requestBody: UpdateVirtualRouterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the service mesh in which the virtual router resides.
     */
    meshName: string;
    /**
     * The name of the virtual router to update.
     */
    virtualRouterName: string;
}
export declare class UpdateVirtualRouterResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateVirtualRouterOutput?: shared.UpdateVirtualRouterOutput;
}
