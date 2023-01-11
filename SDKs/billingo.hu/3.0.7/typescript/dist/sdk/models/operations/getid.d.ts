import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetIdRequest extends SpeakeasyBase {
    pathParams: GetIdPathParams;
}
export declare class GetIdResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    id?: shared.Id;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
