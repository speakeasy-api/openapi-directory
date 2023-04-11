import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointsList } from "./vpcendpointslist";
/**
 * Describes a connection endpoint.
 */
export declare class Endpoint extends SpeakeasyBase {
    address?: string;
    port?: number;
    vpcEndpoints?: VpcEndpointsList[];
}
