import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisconnectVendorSecurity extends SpeakeasyBase {
    userAccessToken: string;
}
/**
 * Vendor ID
 */
export declare enum DisconnectVendorVendorEnum {
    Tesla = "TESLA",
    Bmw = "BMW",
    Audi = "AUDI",
    Volkswagen = "VOLKSWAGEN",
    Hyundai = "HYUNDAI",
    Peugeot = "PEUGEOT",
    Nissan = "NISSAN"
}
export declare class DisconnectVendorRequest extends SpeakeasyBase {
    /**
     * Vendor to be unlinked
     */
    vendor: DisconnectVendorVendorEnum;
}
export declare class DisconnectVendorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
