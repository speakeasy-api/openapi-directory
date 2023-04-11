import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDocumentRequest extends SpeakeasyBase {
    /**
     * Filter documents by the identifier of your DocumentBlock.
     */
    blockId?: number;
    /**
     * Filter documents by date.
     */
    endDate?: Date;
    /**
     * Ending number of the document, should not contain year or any other formatting. Required if `end_year` given
     */
    endNumber?: number;
    /**
     * Year for `end_number` parameter. Required if `end_number` given.
     */
    endYear?: number;
    page?: number;
    /**
     * Filter documents by the identifier of your Partner.
     */
    partnerId?: number;
    /**
     * Filter documents by PaymentMethod value.
     */
    paymentMethod?: shared.PaymentMethodEnum;
    /**
     * Filter documents by PaymentStatus value.
     */
    paymentStatus?: shared.PaymentStatusEnum;
    perPage?: number;
    /**
     * Filter documents by date.
     */
    startDate?: Date;
    /**
     * Starting number of the document, should not contain year or any other formatting. Required if `start_year` given
     */
    startNumber?: number;
    /**
     * Year for `start_number` parameter. Required if `start_number` given.
     */
    startYear?: number;
}
export declare class ListDocumentResponse extends SpeakeasyBase {
    /**
     * The request is malformed.
     */
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    /**
     * Success response
     */
    documentList?: shared.DocumentList;
    headers?: Record<string, string[]>;
    /**
     * Internal server error.
     */
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation errors occured.
     */
    validationErrorResponse?: shared.ValidationErrorResponse;
}
