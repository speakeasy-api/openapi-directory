import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateTrafficMirrorFilterRuleActionEnum {
    CreateTrafficMirrorFilterRule = "CreateTrafficMirrorFilterRule"
}
/**
 * Information about the Traffic Mirror filter rule port range.
 */
export declare class GETCreateTrafficMirrorFilterRuleDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The action to take on the filtered traffic.
 */
export declare enum GETCreateTrafficMirrorFilterRuleRuleActionEnum {
    Accept = "accept",
    Reject = "reject"
}
/**
 * Information about the Traffic Mirror filter rule port range.
 */
export declare class GETCreateTrafficMirrorFilterRuleSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The type of traffic.
 */
export declare enum GETCreateTrafficMirrorFilterRuleTrafficDirectionEnum {
    Ingress = "ingress",
    Egress = "egress"
}
export declare enum GETCreateTrafficMirrorFilterRuleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCreateTrafficMirrorFilterRuleRequest extends SpeakeasyBase {
    action: GETCreateTrafficMirrorFilterRuleActionEnum;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to ensure idempotency</a>.
     */
    clientToken?: string;
    /**
     * The description of the Traffic Mirror rule.
     */
    description?: string;
    /**
     * The destination CIDR block to assign to the Traffic Mirror rule.
     */
    destinationCidrBlock: string;
    /**
     * The destination port range.
     */
    destinationPortRange?: GETCreateTrafficMirrorFilterRuleDestinationPortRange;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * <p>The protocol, for example UDP, to assign to the Traffic Mirror rule.</p> <p>For information about the protocol value, see <a href="https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml">Protocol Numbers</a> on the Internet Assigned Numbers Authority (IANA) website.</p>
     */
    protocol?: number;
    /**
     * The action to take on the filtered traffic.
     */
    ruleAction: GETCreateTrafficMirrorFilterRuleRuleActionEnum;
    /**
     * The number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.
     */
    ruleNumber: number;
    /**
     * The source CIDR block to assign to the Traffic Mirror rule.
     */
    sourceCidrBlock: string;
    /**
     * The source port range.
     */
    sourcePortRange?: GETCreateTrafficMirrorFilterRuleSourcePortRange;
    /**
     * The type of traffic.
     */
    trafficDirection: GETCreateTrafficMirrorFilterRuleTrafficDirectionEnum;
    /**
     * The ID of the filter that this rule is associated with.
     */
    trafficMirrorFilterId: string;
    version: GETCreateTrafficMirrorFilterRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateTrafficMirrorFilterRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
