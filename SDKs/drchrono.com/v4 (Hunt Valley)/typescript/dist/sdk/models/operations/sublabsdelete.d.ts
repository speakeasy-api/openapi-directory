import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SublabsDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SublabsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class SublabsDeleteRequest extends SpeakeasyBase {
    pathParams: SublabsDeletePathParams;
    security: SublabsDeleteSecurity;
}
export declare class SublabsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
