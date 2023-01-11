import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SublabsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class SublabsCreateRequest extends SpeakeasyBase {
    security: SublabsCreateSecurity;
}
export declare class SublabsCreateResponse extends SpeakeasyBase {
    contentType: string;
    labVendorLocation?: shared.LabVendorLocation;
    statusCode: number;
}
