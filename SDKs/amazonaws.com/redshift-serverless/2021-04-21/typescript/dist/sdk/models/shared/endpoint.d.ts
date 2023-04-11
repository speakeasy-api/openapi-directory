import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpoint } from "./vpcendpoint";
/**
 * The VPC endpoint object.
 */
export declare class Endpoint extends SpeakeasyBase {
    address?: string;
    port?: number;
    vpcEndpoints?: VpcEndpoint[];
}
