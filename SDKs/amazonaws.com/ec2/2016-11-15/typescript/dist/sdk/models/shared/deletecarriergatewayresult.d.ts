import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the carrier gateway.
 */
export declare enum DeleteCarrierGatewayResultCarrierGatewayStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DeleteCarrierGatewayResultCarrierGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the carrier gateway.
 */
export declare class DeleteCarrierGatewayResultCarrierGateway extends SpeakeasyBase {
    carrierGatewayId?: string;
    ownerId?: string;
    state?: DeleteCarrierGatewayResultCarrierGatewayStateEnum;
    tags?: DeleteCarrierGatewayResultCarrierGatewayTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DeleteCarrierGatewayResult extends SpeakeasyBase {
    carrierGateway?: DeleteCarrierGatewayResultCarrierGateway;
}
