import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointFilters } from "./vpcendpointfilters";
export declare class ListVpcEndpointsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    vpcEndpointFilters?: VpcEndpointFilters;
}
