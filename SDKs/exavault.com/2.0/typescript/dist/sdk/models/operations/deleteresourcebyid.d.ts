import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteResourceByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteResourceByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class DeleteResourceByIdRequest extends SpeakeasyBase {
    pathParams: DeleteResourceByIdPathParams;
    headers: DeleteResourceByIdHeaders;
}
export declare class DeleteResourceByIdResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
