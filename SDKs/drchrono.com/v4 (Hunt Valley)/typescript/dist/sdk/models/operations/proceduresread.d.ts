import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProceduresReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ProceduresReadQueryParams extends SpeakeasyBase {
    appointment?: number;
    doctor?: number;
    muDate?: string;
    muDateRange?: string;
    patient?: number;
    serviceDate?: string;
}
export declare class ProceduresReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class ProceduresReadRequest extends SpeakeasyBase {
    pathParams: ProceduresReadPathParams;
    queryParams: ProceduresReadQueryParams;
    security: ProceduresReadSecurity;
}
export declare class ProceduresReadResponse extends SpeakeasyBase {
    billingLineItem?: shared.BillingLineItem;
    contentType: string;
    statusCode: number;
}
