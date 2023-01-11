import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserAccountInfoHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetUserAccountInfoRequest extends SpeakeasyBase {
    headers: GetUserAccountInfoHeaders;
}
export declare class GetUserAccountInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    accountInfo?: shared.AccountInfo;
}
