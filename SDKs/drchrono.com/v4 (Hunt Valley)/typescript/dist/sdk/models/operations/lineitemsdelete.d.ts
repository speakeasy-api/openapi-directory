import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineItemsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LineItemsDeleteQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    office?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
export declare class LineItemsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LineItemsDeleteRequest extends SpeakeasyBase {
    pathParams: LineItemsDeletePathParams;
    queryParams: LineItemsDeleteQueryParams;
    security: LineItemsDeleteSecurity;
}
export declare class LineItemsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
