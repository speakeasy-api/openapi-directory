import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorFieldType } from "./errorfieldtype";
/**
 * OK - the request has succeeded.
 */
export declare class SetupBeneficiaryResponse extends SpeakeasyBase {
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
