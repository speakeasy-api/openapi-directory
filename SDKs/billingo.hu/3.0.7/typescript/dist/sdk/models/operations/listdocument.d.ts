import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDocumentQueryParams extends SpeakeasyBase {
    blockId?: number;
    endDate?: Date;
    endNumber?: number;
    endYear?: number;
    page?: number;
    partnerId?: number;
    paymentMethod?: shared.PaymentMethodEnum;
    paymentStatus?: shared.PaymentStatusEnum;
    perPage?: number;
    startDate?: Date;
    startNumber?: number;
    startYear?: number;
}
export declare class ListDocumentRequest extends SpeakeasyBase {
    queryParams: ListDocumentQueryParams;
}
export declare class ListDocumentResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    documentList?: shared.DocumentList;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
