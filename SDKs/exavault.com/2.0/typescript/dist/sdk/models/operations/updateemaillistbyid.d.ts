import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEmailListByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateEmailListByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class UpdateEmailListByIdUpdateEmailListRequestBody extends SpeakeasyBase {
    emails?: string[];
    name?: string;
}
export declare class UpdateEmailListByIdRequest extends SpeakeasyBase {
    pathParams: UpdateEmailListByIdPathParams;
    headers: UpdateEmailListByIdHeaders;
    request?: UpdateEmailListByIdUpdateEmailListRequestBody;
}
export declare class UpdateEmailListByIdResponse extends SpeakeasyBase {
    contentType: string;
    emailListResponse?: shared.EmailListResponse;
    statusCode: number;
}
