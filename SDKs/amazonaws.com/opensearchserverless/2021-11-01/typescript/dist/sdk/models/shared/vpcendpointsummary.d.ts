import { SpeakeasyBase } from "../../../internal/utils";
import { VpcEndpointStatusEnum } from "./vpcendpointstatusenum";
/**
 * The VPC endpoint object.
 */
export declare class VpcEndpointSummary extends SpeakeasyBase {
    id?: string;
    name?: string;
    status?: VpcEndpointStatusEnum;
}
