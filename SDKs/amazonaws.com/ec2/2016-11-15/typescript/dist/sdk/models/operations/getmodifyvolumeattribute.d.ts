import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyVolumeAttributeActionEnum {
    ModifyVolumeAttribute = "ModifyVolumeAttribute"
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifyVolumeAttributeAutoEnableIo extends SpeakeasyBase {
    value?: boolean;
}
export declare enum GETModifyVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVolumeAttributeRequest extends SpeakeasyBase {
    action: GETModifyVolumeAttributeActionEnum;
    /**
     * Indicates whether the volume should be auto-enabled for I/O operations.
     */
    autoEnableIO?: GETModifyVolumeAttributeAutoEnableIo;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETModifyVolumeAttributeVersionEnum;
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
export declare class GETModifyVolumeAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
