import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorFieldType } from "./errorfieldtype";
/**
 * OK - the request has succeeded.
 */
export declare class GetTaxFormResponse extends SpeakeasyBase {
    /**
     * The content of the tax form in the Base64 binary format.
     */
    content?: string;
    /**
     * The content type of the tax form.
     */
    contentType?: string;
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
