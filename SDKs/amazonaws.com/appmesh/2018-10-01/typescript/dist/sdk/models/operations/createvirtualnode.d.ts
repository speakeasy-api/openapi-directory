import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object representing the specification of a virtual node.
 */
export declare class CreateVirtualNodeRequestBodySpec extends SpeakeasyBase {
    backends?: string[];
    listeners?: shared.Listener[];
    serviceDiscovery?: shared.ServiceDiscovery;
}
export declare class CreateVirtualNodeRequestBody extends SpeakeasyBase {
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
    spec: CreateVirtualNodeRequestBodySpec;
    /**
     * The name to use for the virtual node.
     */
    virtualNodeName: string;
}
export declare class CreateVirtualNodeRequest extends SpeakeasyBase {
    requestBody: CreateVirtualNodeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the service mesh in which to create the virtual node.
     */
    meshName: string;
}
export declare class CreateVirtualNodeResponse extends SpeakeasyBase {
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
    createVirtualNodeOutput?: shared.CreateVirtualNodeOutput;
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
