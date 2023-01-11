import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineItemsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LineItemsReadQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    office?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
export declare class LineItemsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LineItemsReadRequest extends SpeakeasyBase {
    pathParams: LineItemsReadPathParams;
    queryParams: LineItemsReadQueryParams;
    security: LineItemsReadSecurity;
}
export declare class LineItemsReadResponse extends SpeakeasyBase {
    billingLineItem?: shared.BillingLineItem;
    contentType: string;
    statusCode: number;
}
