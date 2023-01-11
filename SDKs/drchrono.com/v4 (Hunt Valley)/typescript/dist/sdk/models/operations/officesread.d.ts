import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OfficesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OfficesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class OfficesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class OfficesReadRequest extends SpeakeasyBase {
    pathParams: OfficesReadPathParams;
    queryParams: OfficesReadQueryParams;
    security: OfficesReadSecurity;
}
export declare class OfficesReadResponse extends SpeakeasyBase {
    contentType: string;
    office?: shared.Office;
    statusCode: number;
}
