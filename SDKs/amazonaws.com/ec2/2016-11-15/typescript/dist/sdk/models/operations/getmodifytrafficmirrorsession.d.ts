import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETModifyTrafficMirrorSessionActionEnum {
    ModifyTrafficMirrorSession = "ModifyTrafficMirrorSession"
}
export declare enum GETModifyTrafficMirrorSessionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyTrafficMirrorSessionRequest extends SpeakeasyBase {
    action: GETModifyTrafficMirrorSessionActionEnum;
    /**
     * The description to assign to the Traffic Mirror session.
     */
    description?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The number of bytes in each packet to mirror. These are bytes after the VXLAN header. To mirror a subset, set this to the length (in bytes) to mirror. For example, if you set this value to 100, then the first 100 bytes that meet the filter criteria are copied to the target. Do not specify this parameter when you want to mirror the entire packet.
     */
    packetLength?: number;
    /**
     * <p>The properties that you want to remove from the Traffic Mirror session.</p> <p>When you remove a property from a Traffic Mirror session, the property is set to the default.</p>
     */
    removeField?: shared.TrafficMirrorSessionFieldEnum[];
    /**
     * <p>The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.</p> <p>Valid values are 1-32766.</p>
     */
    sessionNumber?: number;
    /**
     * The ID of the Traffic Mirror filter.
     */
    trafficMirrorFilterId?: string;
    /**
     * The ID of the Traffic Mirror session.
     */
    trafficMirrorSessionId: string;
    /**
     * The Traffic Mirror target. The target must be in the same VPC as the source, or have a VPC peering connection with the source.
     */
    trafficMirrorTargetId?: string;
    version: GETModifyTrafficMirrorSessionVersionEnum;
    /**
     * The virtual network ID of the Traffic Mirror session.
     */
    virtualNetworkId?: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyTrafficMirrorSessionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
