import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePartnerPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdatePartnerRequest extends SpeakeasyBase {
    pathParams: UpdatePartnerPathParams;
    request: shared.PartnerUpsert;
}
export declare class UpdatePartnerResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    partner?: shared.Partner;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
