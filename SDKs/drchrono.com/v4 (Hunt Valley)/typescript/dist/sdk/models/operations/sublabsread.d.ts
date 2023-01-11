import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SublabsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SublabsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class SublabsReadRequest extends SpeakeasyBase {
    pathParams: SublabsReadPathParams;
    security: SublabsReadSecurity;
}
export declare class SublabsReadResponse extends SpeakeasyBase {
    contentType: string;
    labVendorLocation?: shared.LabVendorLocation;
    statusCode: number;
}
