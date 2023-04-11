import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that represents the specification of a virtual node.
 */
export declare class CreateVirtualNodeRequestBodySpec extends SpeakeasyBase {
    backendDefaults?: shared.BackendDefaults;
    backends?: shared.Backend[];
    listeners?: shared.Listener[];
    logging?: shared.Logging;
    serviceDiscovery?: shared.ServiceDiscovery;
}
export declare class CreateVirtualNodeRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    clientToken?: string;
    /**
     * An object that represents the specification of a virtual node.
     */
    spec: CreateVirtualNodeRequestBodySpec;
    /**
     * Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    tags?: shared.TagRef[];
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
     * The name of the service mesh to create the virtual node in.
     */
    meshName: string;
    /**
     * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
     */
    meshOwner?: string;
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
