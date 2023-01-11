import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the attribute.
**/
export declare class DescribeFpgaImageAttributeResultFpgaImageAttribute extends SpeakeasyBase {
    description?: Record<string, any>;
    fpgaImageId?: Record<string, any>;
    loadPermissions?: Record<string, any>;
    name?: Record<string, any>;
    productCodes?: Record<string, any>;
}
export declare class DescribeFpgaImageAttributeResult extends SpeakeasyBase {
    fpgaImageAttribute?: DescribeFpgaImageAttributeResultFpgaImageAttribute;
}
