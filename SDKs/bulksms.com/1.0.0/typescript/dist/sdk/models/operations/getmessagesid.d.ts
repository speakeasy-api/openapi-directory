import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessagesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetMessagesIdRequest extends SpeakeasyBase {
    pathParams: GetMessagesIdPathParams;
}
export declare class GetMessagesIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    message?: shared.Message;
    statusCode: number;
}
