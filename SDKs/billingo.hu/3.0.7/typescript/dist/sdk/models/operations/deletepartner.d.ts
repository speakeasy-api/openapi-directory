import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePartnerPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeletePartnerRequest extends SpeakeasyBase {
    pathParams: DeletePartnerPathParams;
}
export declare class DeletePartnerResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
}
