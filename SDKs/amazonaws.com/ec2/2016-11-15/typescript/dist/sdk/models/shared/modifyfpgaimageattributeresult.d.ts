import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The name of the group.
 */
export declare enum ModifyFpgaImageAttributeResultFpgaImageAttributeLoadPermissionsGroupEnum {
    All = "all"
}
/**
 * Describes a load permission.
 */
export declare class ModifyFpgaImageAttributeResultFpgaImageAttributeLoadPermissions extends SpeakeasyBase {
    group?: ModifyFpgaImageAttributeResultFpgaImageAttributeLoadPermissionsGroupEnum;
    userId?: string;
}
/**
 * The type of product code.
 */
export declare enum ModifyFpgaImageAttributeResultFpgaImageAttributeProductCodesProductCodeTypeEnum {
    Devpay = "devpay",
    Marketplace = "marketplace"
}
/**
 * Describes a product code.
 */
export declare class ModifyFpgaImageAttributeResultFpgaImageAttributeProductCodes extends SpeakeasyBase {
    productCodeId?: string;
    productCodeType?: ModifyFpgaImageAttributeResultFpgaImageAttributeProductCodesProductCodeTypeEnum;
}
/**
 * Information about the attribute.
 */
export declare class ModifyFpgaImageAttributeResultFpgaImageAttribute extends SpeakeasyBase {
    description?: string;
    fpgaImageId?: string;
    loadPermissions?: ModifyFpgaImageAttributeResultFpgaImageAttributeLoadPermissions[];
    name?: string;
    productCodes?: ModifyFpgaImageAttributeResultFpgaImageAttributeProductCodes[];
}
/**
 * Success
 */
export declare class ModifyFpgaImageAttributeResult extends SpeakeasyBase {
    fpgaImageAttribute?: ModifyFpgaImageAttributeResultFpgaImageAttribute;
}
