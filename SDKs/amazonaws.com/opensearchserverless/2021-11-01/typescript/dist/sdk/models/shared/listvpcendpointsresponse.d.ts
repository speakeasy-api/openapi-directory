import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointSummary } from "./vpcendpointsummary";
/**
 * Success
 */
export declare class ListVpcEndpointsResponse extends SpeakeasyBase {
    nextToken?: string;
    vpcEndpointSummaries?: VpcEndpointSummary[];
}
