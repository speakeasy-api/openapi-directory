import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that represents the specification of a service mesh resource.
 */
export declare class UpdateVirtualGatewayRequestBodySpec extends SpeakeasyBase {
    backendDefaults?: shared.VirtualGatewayBackendDefaults;
    listeners?: shared.VirtualGatewayListener[];
    /**
     * An object that represents logging information.
     */
    logging?: shared.VirtualGatewayLogging;
}
export declare class UpdateVirtualGatewayRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: string;
    /**
     * An object that represents the specification of a service mesh resource.
     */
    spec: UpdateVirtualGatewayRequestBodySpec;
}
export declare class UpdateVirtualGatewayRequest extends SpeakeasyBase {
    requestBody: UpdateVirtualGatewayRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the service mesh that the virtual gateway resides in.
     */
    meshName: string;
    /**
     * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
     */
    meshOwner?: string;
    /**
     * The name of the virtual gateway to update.
     */
    virtualGatewayName: string;
}
export declare class UpdateVirtualGatewayResponse extends SpeakeasyBase {
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
    updateVirtualGatewayOutput?: shared.UpdateVirtualGatewayOutput;
}
