import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanyDeepsearchLeiPathParams extends SpeakeasyBase {
    number: string;
}
export declare class CompanyDeepsearchLeiQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class CompanyDeepsearchLeiSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyDeepsearchLeiRequest extends SpeakeasyBase {
    pathParams: CompanyDeepsearchLeiPathParams;
    queryParams: CompanyDeepsearchLeiQueryParams;
    security: CompanyDeepsearchLeiSecurity;
}
export declare class CompanyDeepsearchLeiResponse extends SpeakeasyBase {
    companyDeepsearchLEI200ApplicationJSONAny?: any;
    companyDeepsearchLEIDefaultApplicationJSONAny?: any;
    contentType: string;
    statusCode: number;
}
