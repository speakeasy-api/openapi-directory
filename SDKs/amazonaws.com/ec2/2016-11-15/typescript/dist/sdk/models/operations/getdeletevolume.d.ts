import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteVolumeActionEnum {
    DeleteVolume = "DeleteVolume"
}
export declare enum GETDeleteVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDeleteVolumeRequest extends SpeakeasyBase {
    action: GETDeleteVolumeActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETDeleteVolumeVersionEnum;
    /**
     * The ID of the volume.
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
export declare class GETDeleteVolumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
