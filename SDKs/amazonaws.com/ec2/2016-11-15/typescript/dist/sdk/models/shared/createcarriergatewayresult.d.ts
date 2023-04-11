import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the carrier gateway.
 */
export declare enum CreateCarrierGatewayResultCarrierGatewayStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateCarrierGatewayResultCarrierGatewayTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the carrier gateway.
 */
export declare class CreateCarrierGatewayResultCarrierGateway extends SpeakeasyBase {
    carrierGatewayId?: string;
    ownerId?: string;
    state?: CreateCarrierGatewayResultCarrierGatewayStateEnum;
    tags?: CreateCarrierGatewayResultCarrierGatewayTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class CreateCarrierGatewayResult extends SpeakeasyBase {
    carrierGateway?: CreateCarrierGatewayResultCarrierGateway;
}
