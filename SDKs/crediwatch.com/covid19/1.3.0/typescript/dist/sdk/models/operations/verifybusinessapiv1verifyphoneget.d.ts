import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifyBusinessApiV1VerifyPhoneGetQueryParams extends SpeakeasyBase {
    lockingPeriod?: any;
    query: string;
}
export declare class VerifyBusinessApiV1VerifyPhoneGetRequest extends SpeakeasyBase {
    queryParams: VerifyBusinessApiV1VerifyPhoneGetQueryParams;
}
export declare class VerifyBusinessApiV1VerifyPhoneGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    verifyPhone?: shared.VerifyPhone;
}
