import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOnlineSzamlaStatusPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetOnlineSzamlaStatusRequest extends SpeakeasyBase {
    pathParams: GetOnlineSzamlaStatusPathParams;
}
export declare class GetOnlineSzamlaStatusResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    onlineSzamlaStatus?: shared.OnlineSzamlaStatus;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
