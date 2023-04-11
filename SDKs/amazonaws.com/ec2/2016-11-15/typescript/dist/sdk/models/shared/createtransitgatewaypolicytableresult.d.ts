import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the transit gateway policy table
 */
export declare enum CreateTransitGatewayPolicyTableResultTransitGatewayPolicyTableStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class CreateTransitGatewayPolicyTableResultTransitGatewayPolicyTableTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes the created transit gateway policy table.
 */
export declare class CreateTransitGatewayPolicyTableResultTransitGatewayPolicyTable extends SpeakeasyBase {
    creationTime?: Date;
    state?: CreateTransitGatewayPolicyTableResultTransitGatewayPolicyTableStateEnum;
    tags?: CreateTransitGatewayPolicyTableResultTransitGatewayPolicyTableTags[];
    transitGatewayId?: string;
    transitGatewayPolicyTableId?: string;
}
/**
 * Success
 */
export declare class CreateTransitGatewayPolicyTableResult extends SpeakeasyBase {
    transitGatewayPolicyTable?: CreateTransitGatewayPolicyTableResultTransitGatewayPolicyTable;
}
