import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointStatusEnum } from "./vpcendpointstatusenum";
/**
 * Filter the results of a <code>ListVpcEndpoints</code> request.
 */
export declare class VpcEndpointFilters extends SpeakeasyBase {
    status?: VpcEndpointStatusEnum;
}
