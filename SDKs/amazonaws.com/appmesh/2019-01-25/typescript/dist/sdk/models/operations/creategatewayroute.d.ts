import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that represents a gateway route specification. Specify one gateway route type.
 */
export declare class CreateGatewayRouteRequestBodySpec extends SpeakeasyBase {
    grpcRoute?: shared.GrpcGatewayRoute;
    http2Route?: shared.HttpGatewayRoute;
    httpRoute?: shared.HttpGatewayRoute;
    priority?: number;
}
export declare class CreateGatewayRouteRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: string;
    /**
     * The name to use for the gateway route.
     */
    gatewayRouteName: string;
    /**
     * An object that represents a gateway route specification. Specify one gateway route type.
     */
    spec: CreateGatewayRouteRequestBodySpec;
    /**
     * Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    tags?: shared.TagRef[];
}
export declare class CreateGatewayRouteRequest extends SpeakeasyBase {
    requestBody: CreateGatewayRouteRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the service mesh to create the gateway route in.
     */
    meshName: string;
    /**
     * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
     */
    meshOwner?: string;
    /**
     * The name of the virtual gateway to associate the gateway route with. If the virtual gateway is in a shared mesh, then you must be the owner of the virtual gateway resource.
     */
    virtualGatewayName: string;
}
export declare class CreateGatewayRouteResponse extends SpeakeasyBase {
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
    createGatewayRouteOutput?: shared.CreateGatewayRouteOutput;
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
}
