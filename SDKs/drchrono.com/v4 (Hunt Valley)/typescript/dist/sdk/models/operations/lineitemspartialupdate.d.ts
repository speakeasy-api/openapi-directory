import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineItemsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LineItemsPartialUpdateQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    office?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
export declare class LineItemsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LineItemsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: LineItemsPartialUpdatePathParams;
    queryParams: LineItemsPartialUpdateQueryParams;
    security: LineItemsPartialUpdateSecurity;
}
export declare class LineItemsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
