import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object representing the specification of a virtual node.
 */
export declare class UpdateVirtualNodeRequestBodySpec extends SpeakeasyBase {
    backends?: string[];
    listeners?: shared.Listener[];
    serviceDiscovery?: shared.ServiceDiscovery;
}
export declare class UpdateVirtualNodeRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     *
     * @remarks
     * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: string;
    /**
     * An object representing the specification of a virtual node.
     */
    spec: UpdateVirtualNodeRequestBodySpec;
}
export declare class UpdateVirtualNodeRequest extends SpeakeasyBase {
    requestBody: UpdateVirtualNodeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the service mesh in which the virtual node resides.
     */
    meshName: string;
    /**
     * The name of the virtual node to update.
     */
    virtualNodeName: string;
}
export declare class UpdateVirtualNodeResponse extends SpeakeasyBase {
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
    updateVirtualNodeOutput?: shared.UpdateVirtualNodeOutput;
}
