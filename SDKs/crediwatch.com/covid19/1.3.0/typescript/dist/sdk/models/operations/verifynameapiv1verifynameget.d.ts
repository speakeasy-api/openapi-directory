import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifyNameApiV1VerifyNameGetQueryParams extends SpeakeasyBase {
    city?: string;
    query: string;
    state?: string;
}
export declare class VerifyNameApiV1VerifyNameGetRequest extends SpeakeasyBase {
    queryParams: VerifyNameApiV1VerifyNameGetQueryParams;
}
export declare class VerifyNameApiV1VerifyNameGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    verifyName?: shared.VerifyName;
}
