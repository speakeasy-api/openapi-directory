import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanyDeepsearchNumberPathParams extends SpeakeasyBase {
    country: string;
    number: string;
}
export declare class CompanyDeepsearchNumberSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class CompanyDeepsearchNumberRequest extends SpeakeasyBase {
    pathParams: CompanyDeepsearchNumberPathParams;
    security: CompanyDeepsearchNumberSecurity;
}
export declare class CompanyDeepsearchNumberResponse extends SpeakeasyBase {
    companyDeepsearchNumber200ApplicationJSONAnies?: any[];
    companyDeepsearchNumberDefaultApplicationJSONAny?: any;
    contentType: string;
    statusCode: number;
}
