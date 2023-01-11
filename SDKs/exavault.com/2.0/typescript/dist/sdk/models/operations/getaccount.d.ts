import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetAccountHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetAccountRequest extends SpeakeasyBase {
    queryParams: GetAccountQueryParams;
    headers: GetAccountHeaders;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    accountResponse?: shared.AccountResponse;
    contentType: string;
    statusCode: number;
}
