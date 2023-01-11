import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ImplantableDeviceStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class ImplantableDevice extends SpeakeasyBase {
    archived?: boolean;
    brandName?: string;
    companyName?: string;
    createdAt?: string;
    expirationDate?: string;
    gmdnPtName?: string;
    id?: number;
    manufacturingDate?: string;
    patient?: string;
    procedure?: string;
    serialNumber?: string;
    status?: ImplantableDeviceStatusEnum;
    udi?: string;
    updatedAt?: string;
    versionOrModel?: string;
}
