import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of <code>autoEnableIO</code> attribute.
 */
export declare class DescribeVolumeAttributeResultAutoEnableIO extends SpeakeasyBase {
    value?: boolean;
}
/**
 * The type of product code.
 */
export declare enum DescribeVolumeAttributeResultProductCodesProductCodeTypeEnum {
    Devpay = "devpay",
    Marketplace = "marketplace"
}
/**
 * Describes a product code.
 */
export declare class DescribeVolumeAttributeResultProductCodes extends SpeakeasyBase {
    productCodeId?: string;
    productCodeType?: DescribeVolumeAttributeResultProductCodesProductCodeTypeEnum;
}
/**
 * Success
 */
export declare class DescribeVolumeAttributeResult extends SpeakeasyBase {
    autoEnableIO?: DescribeVolumeAttributeResultAutoEnableIO;
    productCodes?: DescribeVolumeAttributeResultProductCodes[];
    volumeId?: string;
}
