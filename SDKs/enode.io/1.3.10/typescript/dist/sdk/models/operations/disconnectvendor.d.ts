import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisconnectVendorVendorEnum {
    Tesla = "TESLA",
    Bmw = "BMW",
    Audi = "AUDI",
    Volkswagen = "VOLKSWAGEN",
    Hyundai = "HYUNDAI",
    Peugeot = "PEUGEOT",
    Nissan = "NISSAN"
}
export declare class DisconnectVendorPathParams extends SpeakeasyBase {
    vendor: DisconnectVendorVendorEnum;
}
export declare class DisconnectVendorSecurity extends SpeakeasyBase {
    userAccessToken: shared.SchemeUserAccessToken;
}
export declare class DisconnectVendorRequest extends SpeakeasyBase {
    pathParams: DisconnectVendorPathParams;
    security: DisconnectVendorSecurity;
}
export declare class DisconnectVendorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
