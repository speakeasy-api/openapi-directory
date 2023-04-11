import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDataflowEndpointGroupRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * UUID of a dataflow endpoint group.
     */
    dataflowEndpointGroupId: string;
}
export declare class DeleteDataflowEndpointGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    dataflowEndpointGroupIdResponse?: shared.DataflowEndpointGroupIdResponse;
    /**
     * DependencyException
     */
    dependencyException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
