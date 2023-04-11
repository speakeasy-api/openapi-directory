import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETImportVolumeActionEnum {
    ImportVolume = "ImportVolume"
}
/**
 * The disk image format.
 */
export declare enum GETImportVolumeImageFormatEnum {
    Vmdk = "VMDK",
    Raw = "RAW",
    Vhd = "VHD"
}
/**
 * Describes a disk image.
 */
export declare class GETImportVolumeImage extends SpeakeasyBase {
    bytes: number;
    format: GETImportVolumeImageFormatEnum;
    importManifestUrl: string;
}
export declare enum GETImportVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
/**
 * Describes an EBS volume.
 */
export declare class GETImportVolumeVolume extends SpeakeasyBase {
    size: number;
}
export declare class GETImportVolumeRequest extends SpeakeasyBase {
    action: GETImportVolumeActionEnum;
    /**
     * The Availability Zone for the resulting EBS volume.
     */
    availabilityZone: string;
    /**
     * A description of the volume.
     */
    description?: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The disk image.
     */
    image: GETImportVolumeImage;
    version: GETImportVolumeVersionEnum;
    /**
     * The volume size.
     */
    volume: GETImportVolumeVolume;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETImportVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
