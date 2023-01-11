import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPartnerPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPartnerRequest extends SpeakeasyBase {
    pathParams: GetPartnerPathParams;
}
export declare class GetPartnerResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    partner?: shared.Partner;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
