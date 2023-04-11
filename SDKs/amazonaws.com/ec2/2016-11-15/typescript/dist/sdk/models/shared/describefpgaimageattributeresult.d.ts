import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The name of the group.
 */
export declare enum DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissionsGroupEnum {
    All = "all"
}
/**
 * Describes a load permission.
 */
export declare class DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissions extends SpeakeasyBase {
    group?: DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissionsGroupEnum;
    userId?: string;
}
/**
 * The type of product code.
 */
export declare enum DescribeFpgaImageAttributeResultFpgaImageAttributeProductCodesProductCodeTypeEnum {
    Devpay = "devpay",
    Marketplace = "marketplace"
}
/**
 * Describes a product code.
 */
export declare class DescribeFpgaImageAttributeResultFpgaImageAttributeProductCodes extends SpeakeasyBase {
    productCodeId?: string;
    productCodeType?: DescribeFpgaImageAttributeResultFpgaImageAttributeProductCodesProductCodeTypeEnum;
}
/**
 * Information about the attribute.
 */
export declare class DescribeFpgaImageAttributeResultFpgaImageAttribute extends SpeakeasyBase {
    description?: string;
    fpgaImageId?: string;
    loadPermissions?: DescribeFpgaImageAttributeResultFpgaImageAttributeLoadPermissions[];
    name?: string;
    productCodes?: DescribeFpgaImageAttributeResultFpgaImageAttributeProductCodes[];
}
/**
 * Success
 */
export declare class DescribeFpgaImageAttributeResult extends SpeakeasyBase {
    fpgaImageAttribute?: DescribeFpgaImageAttributeResultFpgaImageAttribute;
}
