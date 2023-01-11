import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteShareByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteShareByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class DeleteShareByIdRequest extends SpeakeasyBase {
    pathParams: DeleteShareByIdPathParams;
    headers: DeleteShareByIdHeaders;
}
export declare class DeleteShareByIdResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
}
