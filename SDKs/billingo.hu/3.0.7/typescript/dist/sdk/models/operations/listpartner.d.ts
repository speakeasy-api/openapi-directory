import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPartnerQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListPartnerRequest extends SpeakeasyBase {
    queryParams: ListPartnerQueryParams;
}
export declare class ListPartnerResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    partnerList?: shared.PartnerList;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
