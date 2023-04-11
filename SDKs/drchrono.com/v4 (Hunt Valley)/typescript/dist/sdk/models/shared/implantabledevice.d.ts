import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of `'active'` or `'inactive'`
 */
export declare enum ImplantableDeviceStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * OK
 */
export declare class ImplantableDevice extends SpeakeasyBase {
    archived?: boolean;
    brandName?: string;
    companyName?: string;
    createdAt?: string;
    expirationDate?: string;
    /**
     * "GMDN PT Name" or "SNOMED CT Description" mapped to the attribute in  the "GMDN PT Name"
     */
    gmdnPtName?: string;
    id?: number;
    manufacturingDate?: string;
    patient?: string;
    /**
     * ID of `/api/procedures` object
     */
    procedure?: string;
    serialNumber?: string;
    /**
     * One of `'active'` or `'inactive'`
     */
    status?: ImplantableDeviceStatusEnum;
    udi?: string;
    updatedAt?: string;
    versionOrModel?: string;
}
