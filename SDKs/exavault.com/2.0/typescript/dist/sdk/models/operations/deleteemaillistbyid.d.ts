import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEmailListByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteEmailListByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class DeleteEmailListByIdRequest extends SpeakeasyBase {
    pathParams: DeleteEmailListByIdPathParams;
    headers: DeleteEmailListByIdHeaders;
}
export declare class DeleteEmailListByIdResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
