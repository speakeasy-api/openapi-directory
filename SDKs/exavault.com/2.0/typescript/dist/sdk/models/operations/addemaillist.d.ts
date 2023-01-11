import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddEmailListHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class AddEmailListAddEmailListRequestBody extends SpeakeasyBase {
    emails: string[];
    name: string;
}
export declare class AddEmailListRequest extends SpeakeasyBase {
    headers: AddEmailListHeaders;
    request?: AddEmailListAddEmailListRequestBody;
}
export declare class AddEmailListResponse extends SpeakeasyBase {
    contentType: string;
    emailListResponse?: shared.EmailListResponse;
    statusCode: number;
}
