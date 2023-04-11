import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the PCI bus.
 */
export declare class DescribeFpgaImagesResultFpgaImagesPciId extends SpeakeasyBase {
    deviceId?: string;
    subsystemId?: string;
    subsystemVendorId?: string;
    vendorId?: string;
}
/**
 * The type of product code.
 */
export declare enum DescribeFpgaImagesResultFpgaImagesProductCodesProductCodeTypeEnum {
    Devpay = "devpay",
    Marketplace = "marketplace"
}
/**
 * Describes a product code.
 */
export declare class DescribeFpgaImagesResultFpgaImagesProductCodes extends SpeakeasyBase {
    productCodeId?: string;
    productCodeType?: DescribeFpgaImagesResultFpgaImagesProductCodesProductCodeTypeEnum;
}
/**
 * <p>The state. The following are the possible values:</p> <ul> <li> <p> <code>pending</code> - AFI bitstream generation is in progress.</p> </li> <li> <p> <code>available</code> - The AFI is available for use.</p> </li> <li> <p> <code>failed</code> - AFI bitstream generation failed.</p> </li> <li> <p> <code>unavailable</code> - The AFI is no longer available for use.</p> </li> </ul>
 */
export declare enum DescribeFpgaImagesResultFpgaImagesStateCodeEnum {
    Pending = "pending",
    Failed = "failed",
    Available = "available",
    Unavailable = "unavailable"
}
/**
 * Information about the state of the AFI.
 */
export declare class DescribeFpgaImagesResultFpgaImagesState extends SpeakeasyBase {
    code?: DescribeFpgaImagesResultFpgaImagesStateCodeEnum;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeFpgaImagesResultFpgaImagesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an Amazon FPGA image (AFI).
 */
export declare class DescribeFpgaImagesResultFpgaImages extends SpeakeasyBase {
    createTime?: Date;
    dataRetentionSupport?: boolean;
    description?: string;
    fpgaImageGlobalId?: string;
    fpgaImageId?: string;
    instanceTypes?: string[];
    name?: string;
    ownerAlias?: string;
    ownerId?: string;
    pciId?: DescribeFpgaImagesResultFpgaImagesPciId;
    productCodes?: DescribeFpgaImagesResultFpgaImagesProductCodes[];
    public?: boolean;
    shellVersion?: string;
    state?: DescribeFpgaImagesResultFpgaImagesState;
    tags?: DescribeFpgaImagesResultFpgaImagesTags[];
    updateTime?: Date;
}
/**
 * Success
 */
export declare class DescribeFpgaImagesResult extends SpeakeasyBase {
    fpgaImages?: DescribeFpgaImagesResultFpgaImages[];
    nextToken?: string;
}
