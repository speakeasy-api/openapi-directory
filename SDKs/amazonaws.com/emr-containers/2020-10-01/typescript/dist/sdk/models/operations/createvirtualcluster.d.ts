import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The information about the container provider.
 */
export declare class CreateVirtualClusterRequestBodyContainerProvider extends SpeakeasyBase {
    id?: string;
    info?: shared.ContainerInfo;
    type?: shared.ContainerProviderTypeEnum;
}
export declare class CreateVirtualClusterRequestBody extends SpeakeasyBase {
    /**
     * The client token of the virtual cluster.
     */
    clientToken: string;
    /**
     * The information about the container provider.
     */
    containerProvider: CreateVirtualClusterRequestBodyContainerProvider;
    /**
     * The specified name of the virtual cluster.
     */
    name: string;
    /**
     * The tags assigned to the virtual cluster.
     */
    tags?: Record<string, string>;
}
export declare class CreateVirtualClusterRequest extends SpeakeasyBase {
    requestBody: CreateVirtualClusterRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateVirtualClusterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createVirtualClusterResponse?: shared.CreateVirtualClusterResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
