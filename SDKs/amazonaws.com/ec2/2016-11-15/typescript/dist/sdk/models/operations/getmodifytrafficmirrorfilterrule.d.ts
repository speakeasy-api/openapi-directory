import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETModifyTrafficMirrorFilterRuleActionEnum {
    ModifyTrafficMirrorFilterRule = "ModifyTrafficMirrorFilterRule"
}
/**
 * Information about the Traffic Mirror filter rule port range.
 */
export declare class GETModifyTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action to assign to the rule.
 */
export declare enum GETModifyTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * Information about the Traffic Mirror filter rule port range.
 */
export declare class GETModifyTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The type of traffic to assign to the rule.
 */
export declare enum GETModifyTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
export declare enum GETModifyTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    action: GETModifyTrafficMirrorFilterRuleActionEnum;
    /**
     * The description to assign to the Traffic Mirror rule.
     */
    description?: string;
    /**
     * The destination CIDR block to assign to the Traffic Mirror rule.
     */
    destinationCidrBlock?: string;
    /**
     * The destination ports that are associated with the Traffic Mirror rule.
     */
    destinationPortRange?: GETModifyTrafficMirrorFilterRuleDestinationPortRange;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The protocol, for example TCP, to assign to the Traffic Mirror rule.
     */
    protocol?: number;
    /**
     * <p>The properties that you want to remove from the Traffic Mirror filter rule.</p> <p>When you remove a property from a Traffic Mirror filter rule, the property is set to the default.</p>
     */
    removeField?: shared.TrafficMirrorFilterRuleFieldEnum[];
    /**
     * The action to assign to the rule.
     */
    ruleAction?: GETModifyTrafficMirrorFilterRuleRuleActionEnum;
    /**
     * The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.
     */
    ruleNumber?: number;
    /**
     * The source CIDR block to assign to the Traffic Mirror rule.
     */
    sourceCidrBlock?: string;
    /**
     * The port range to assign to the Traffic Mirror rule.
     */
    sourcePortRange?: GETModifyTrafficMirrorFilterRuleSourcePortRange;
    /**
     * The type of traffic to assign to the rule.
     */
    trafficDirection?: GETModifyTrafficMirrorFilterRuleTrafficDirectionEnum;
    /**
     * The ID of the Traffic Mirror rule.
     */
    trafficMirrorFilterRuleId: string;
    version: GETModifyTrafficMirrorFilterRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
