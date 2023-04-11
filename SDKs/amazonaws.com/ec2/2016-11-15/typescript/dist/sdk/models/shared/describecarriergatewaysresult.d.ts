import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the carrier gateway.
 */
export declare enum DescribeCarrierGatewaysResultCarrierGatewaysStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DescribeCarrierGatewaysResultCarrierGatewaysTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a carrier gateway.
 */
export declare class DescribeCarrierGatewaysResultCarrierGateways extends SpeakeasyBase {
    carrierGatewayId?: string;
    ownerId?: string;
    state?: DescribeCarrierGatewaysResultCarrierGatewaysStateEnum;
    tags?: DescribeCarrierGatewaysResultCarrierGatewaysTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeCarrierGatewaysResult extends SpeakeasyBase {
    carrierGateways?: DescribeCarrierGatewaysResultCarrierGateways[];
    nextToken?: string;
}
