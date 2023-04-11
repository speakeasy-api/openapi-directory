import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorParameter } from "./errorparameter";
/**
 * This type contains a error or warning related to a call request.
 */
export declare class ErrorT extends SpeakeasyBase {
    /**
     * The context or source of this error or warning.
     */
    category?: string;
    /**
     * The name of the domain containing the service or application. For example, <code>sell</code> is a domain.
     */
    domain?: string;
    /**
     * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use these values as error code identifiers in your customized error-handling algorithms.
     */
    errorId?: number;
    /**
     * A list of one or more specific request elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation.
     */
    inputRefIds?: string[];
    /**
     * An expanded version of the <b>message</b> field. <br><br><b>Maximum length:</b> 200 characters
     */
    longMessage?: string;
    /**
     * A message about the error or warning which is device agnostic and readable by end users and application developers. It explains what the error or warning is, and how to fix it (in a general sense). If applicable, the value is localized to the end user's requested locale. <br><br><b>Maximum length:</b> 50 characters
     */
    message?: string;
    /**
     * A list of one or more specific response elements (if any) associated with the error or warning. The format of these strings depends on the request payload format. For JSON, use JSONPath notation.
     */
    outputRefIds?: string[];
    /**
     * Contains a list of name-value pairs that provide additional information concerning this error or warning. Each item in the list is an input parameter that contributed to the error or warning condition.
     */
    parameters?: ErrorParameter[];
    /**
     * The name of the domain's subsystem or subdivision. For example, <code>fulfillment</code> is a subdomain in the <code>sell</code> domain.
     */
    subdomain?: string;
}
