import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointDetails } from "./endpointdetails";
/**
 * <p/>
 */
export declare class GetDataflowEndpointGroupResponse extends SpeakeasyBase {
    contactPostPassDurationSeconds?: number;
    contactPrePassDurationSeconds?: number;
    dataflowEndpointGroupArn?: string;
    dataflowEndpointGroupId?: string;
    endpointsDetails?: EndpointDetails[];
    tags?: Record<string, string>;
}
