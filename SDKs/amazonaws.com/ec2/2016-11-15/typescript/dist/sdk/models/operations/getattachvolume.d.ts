import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAttachVolumeActionEnum {
    AttachVolume = "AttachVolume"
}
export declare enum GETAttachVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAttachVolumeRequest extends SpeakeasyBase {
    action: GETAttachVolumeActionEnum;
    /**
     * The device name (for example, <code>/dev/sdh</code> or <code>xvdh</code>).
     */
    device: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    version: GETAttachVolumeVersionEnum;
    /**
     * The ID of the EBS volume. The volume and instance must be within the same Availability Zone.
     */
    volumeId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAttachVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
