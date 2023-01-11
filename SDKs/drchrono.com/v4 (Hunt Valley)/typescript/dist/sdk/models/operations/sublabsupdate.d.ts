import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SublabsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SublabsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class SublabsUpdateRequest extends SpeakeasyBase {
    pathParams: SublabsUpdatePathParams;
    security: SublabsUpdateSecurity;
}
export declare class SublabsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
