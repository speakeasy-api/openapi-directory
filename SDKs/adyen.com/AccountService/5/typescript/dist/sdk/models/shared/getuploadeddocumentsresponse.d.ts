import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentDetail } from "./documentdetail";
import { ErrorFieldType } from "./errorfieldtype";
/**
 * OK - the request has succeeded.
 */
export declare class GetUploadedDocumentsResponse extends SpeakeasyBase {
    /**
     * A list of the documents and their details.
     */
    documentDetails?: DocumentDetail[];
    /**
     * Contains field validation errors that would prevent requests from being processed.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     */
    pspReference?: string;
    /**
     * The result code.
     */
    resultCode?: string;
}
