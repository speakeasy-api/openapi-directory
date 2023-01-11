import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifySkuApiV1VerifySkuGetQueryParams extends SpeakeasyBase {
    lockingPeriod?: any;
    query: string;
}
export declare class VerifySkuApiV1VerifySkuGetRequest extends SpeakeasyBase {
    queryParams: VerifySkuApiV1VerifySkuGetQueryParams;
}
export declare class VerifySkuApiV1VerifySkuGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    verifyPhone?: shared.VerifyPhone;
}
