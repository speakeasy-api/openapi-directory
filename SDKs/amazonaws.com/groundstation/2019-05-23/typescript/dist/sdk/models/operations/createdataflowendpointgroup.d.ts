import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDataflowEndpointGroupRequestBody extends SpeakeasyBase {
    /**
     * Amount of time, in seconds, after a contact ends for the contact to remain in a <code>POSTPASS</code> state. A CloudWatch event is emitted when the contact enters and exits the <code>POSTPASS</code> state.
     */
    contactPostPassDurationSeconds?: number;
    /**
     * Amount of time, in seconds, prior to contact start for the contact to remain in a <code>PREPASS</code> state. A CloudWatch event is emitted when the contact enters and exits the <code>PREPASS</code> state.
     */
    contactPrePassDurationSeconds?: number;
    /**
     * Endpoint details of each endpoint in the dataflow endpoint group.
     */
    endpointDetails: shared.EndpointDetails[];
    /**
     * Tags of a dataflow endpoint group.
     */
    tags?: Record<string, string>;
}
export declare class CreateDataflowEndpointGroupRequest extends SpeakeasyBase {
    requestBody: CreateDataflowEndpointGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDataflowEndpointGroupResponse extends SpeakeasyBase {
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
