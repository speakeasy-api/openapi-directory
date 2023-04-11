import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The meta data tags used for the transit gateway policy rule.
 */
export declare class GetTransitGatewayPolicyTableEntriesResultTransitGatewayPolicyTableEntriesPolicyRuleMetaData extends SpeakeasyBase {
    metaDataKey?: string;
    metaDataValue?: string;
}
/**
 * The policy rule associated with the transit gateway policy table.
 */
export declare class GetTransitGatewayPolicyTableEntriesResultTransitGatewayPolicyTableEntriesPolicyRule extends SpeakeasyBase {
    destinationCidrBlock?: string;
    destinationPortRange?: string;
    metaData?: GetTransitGatewayPolicyTableEntriesResultTransitGatewayPolicyTableEntriesPolicyRuleMetaData;
    protocol?: string;
    sourceCidrBlock?: string;
    sourcePortRange?: string;
}
/**
 * Describes a transit gateway policy table entry
 */
export declare class GetTransitGatewayPolicyTableEntriesResultTransitGatewayPolicyTableEntries extends SpeakeasyBase {
    policyRule?: GetTransitGatewayPolicyTableEntriesResultTransitGatewayPolicyTableEntriesPolicyRule;
    policyRuleNumber?: string;
    targetRouteTableId?: string;
}
/**
 * Success
 */
export declare class GetTransitGatewayPolicyTableEntriesResult extends SpeakeasyBase {
    transitGatewayPolicyTableEntries?: GetTransitGatewayPolicyTableEntriesResultTransitGatewayPolicyTableEntries[];
}
