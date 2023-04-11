import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that represents the specification of a service mesh.
 */
export declare class UpdateMeshRequestBodySpec extends SpeakeasyBase {
    egressFilter?: shared.EgressFilter;
    /**
     * An object that represents the service discovery information for a service mesh.
     */
    serviceDiscovery?: shared.MeshServiceDiscovery;
}
export declare class UpdateMeshRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: string;
    /**
     * An object that represents the specification of a service mesh.
     */
    spec?: UpdateMeshRequestBodySpec;
}
export declare class UpdateMeshRequest extends SpeakeasyBase {
    requestBody: UpdateMeshRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the service mesh to update.
     */
    meshName: string;
}
export declare class UpdateMeshResponse extends SpeakeasyBase {
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
    updateMeshOutput?: shared.UpdateMeshOutput;
}
