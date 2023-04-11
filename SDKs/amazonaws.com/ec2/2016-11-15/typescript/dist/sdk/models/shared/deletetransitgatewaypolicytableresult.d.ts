import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the transit gateway policy table
 */
export declare enum DeleteTransitGatewayPolicyTableResultTransitGatewayPolicyTableStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * Describes a tag.
 */
export declare class DeleteTransitGatewayPolicyTableResultTransitGatewayPolicyTableTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Provides details about the deleted transit gateway policy table.
 */
export declare class DeleteTransitGatewayPolicyTableResultTransitGatewayPolicyTable extends SpeakeasyBase {
    creationTime?: Date;
    state?: DeleteTransitGatewayPolicyTableResultTransitGatewayPolicyTableStateEnum;
    tags?: DeleteTransitGatewayPolicyTableResultTransitGatewayPolicyTableTags[];
    transitGatewayId?: string;
    transitGatewayPolicyTableId?: string;
}
/**
 * Success
 */
export declare class DeleteTransitGatewayPolicyTableResult extends SpeakeasyBase {
    transitGatewayPolicyTable?: DeleteTransitGatewayPolicyTableResultTransitGatewayPolicyTable;
}
