import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineItemsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LineItemsUpdateQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    office?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
export declare class LineItemsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LineItemsUpdateRequest extends SpeakeasyBase {
    pathParams: LineItemsUpdatePathParams;
    queryParams: LineItemsUpdateQueryParams;
    security: LineItemsUpdateSecurity;
}
export declare class LineItemsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
