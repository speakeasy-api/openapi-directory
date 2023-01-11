import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFormMessageByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteFormMessageByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class DeleteFormMessageByIdRequest extends SpeakeasyBase {
    pathParams: DeleteFormMessageByIdPathParams;
    headers: DeleteFormMessageByIdHeaders;
}
export declare class DeleteFormMessageByIdResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
