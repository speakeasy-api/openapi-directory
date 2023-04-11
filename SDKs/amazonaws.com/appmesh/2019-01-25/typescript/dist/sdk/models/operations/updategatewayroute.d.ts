import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that represents a gateway route specification. Specify one gateway route type.
 */
export declare class UpdateGatewayRouteRequestBodySpec extends SpeakeasyBase {
    grpcRoute?: shared.GrpcGatewayRoute;
    http2Route?: shared.HttpGatewayRoute;
    httpRoute?: shared.HttpGatewayRoute;
    priority?: number;
}
export declare class UpdateGatewayRouteRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: string;
    /**
     * An object that represents a gateway route specification. Specify one gateway route type.
     */
    spec: UpdateGatewayRouteRequestBodySpec;
}
export declare class UpdateGatewayRouteRequest extends SpeakeasyBase {
    requestBody: UpdateGatewayRouteRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the gateway route to update.
     */
    gatewayRouteName: string;
    /**
     * The name of the service mesh that the gateway route resides in.
     */
    meshName: string;
    /**
     * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
     */
    meshOwner?: string;
    /**
     * The name of the virtual gateway that the gateway route is associated with.
     */
    virtualGatewayName: string;
}
export declare class UpdateGatewayRouteResponse extends SpeakeasyBase {
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
    updateGatewayRouteOutput?: shared.UpdateGatewayRouteOutput;
}
