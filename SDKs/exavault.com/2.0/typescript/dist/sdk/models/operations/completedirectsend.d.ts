import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompleteDirectSendPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CompleteDirectSendHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class CompleteDirectSendRequest extends SpeakeasyBase {
    pathParams: CompleteDirectSendPathParams;
    headers: CompleteDirectSendHeaders;
}
export declare class CompleteDirectSendResponse extends SpeakeasyBase {
    contentType: string;
    shareResponse?: shared.ShareResponse;
    statusCode: number;
}
