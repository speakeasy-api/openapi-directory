import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineItemsCreateQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    office?: number;
    patient?: number;
    postedDate?: string;
    serviceDate?: string;
    since?: string;
}
export declare class LineItemsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LineItemsCreateRequest extends SpeakeasyBase {
    queryParams: LineItemsCreateQueryParams;
    security: LineItemsCreateSecurity;
}
export declare class LineItemsCreateResponse extends SpeakeasyBase {
    billingLineItem?: shared.BillingLineItem;
    contentType: string;
    statusCode: number;
}
