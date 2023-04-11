import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that represents the specification of a virtual service.
 */
export declare class UpdateVirtualServiceRequestBodySpec extends SpeakeasyBase {
    provider?: shared.VirtualServiceProvider;
}
export declare class UpdateVirtualServiceRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: string;
    /**
     * An object that represents the specification of a virtual service.
     */
    spec: UpdateVirtualServiceRequestBodySpec;
}
export declare class UpdateVirtualServiceRequest extends SpeakeasyBase {
    requestBody: UpdateVirtualServiceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the service mesh that the virtual service resides in.
     */
    meshName: string;
    /**
     * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
     */
    meshOwner?: string;
    /**
     * The name of the virtual service to update.
     */
    virtualServiceName: string;
}
export declare class UpdateVirtualServiceResponse extends SpeakeasyBase {
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
    updateVirtualServiceOutput?: shared.UpdateVirtualServiceOutput;
}
