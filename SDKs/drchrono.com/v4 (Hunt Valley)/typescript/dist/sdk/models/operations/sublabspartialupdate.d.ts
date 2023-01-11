import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SublabsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SublabsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class SublabsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: SublabsPartialUpdatePathParams;
    security: SublabsPartialUpdateSecurity;
}
export declare class SublabsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
