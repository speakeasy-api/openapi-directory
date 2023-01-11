import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InsurancesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class InsurancesReadQueryParams extends SpeakeasyBase {
    payerType: string;
    term?: string;
}
export declare class InsurancesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class InsurancesReadRequest extends SpeakeasyBase {
    pathParams: InsurancesReadPathParams;
    queryParams: InsurancesReadQueryParams;
    security: InsurancesReadSecurity;
}
export declare class InsurancesReadResponse extends SpeakeasyBase {
    contentType: string;
    insurance?: shared.Insurance;
    statusCode: number;
}
