import { SpeakeasyBase } from "../../../internal/utils";
import { Expression } from "./expression";
/**
 * Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure.
 */
export declare class DefineExpressionRequest extends SpeakeasyBase {
    /**
     * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
     */
    domainName: string;
    /**
     * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.
     */
    expression: Expression;
}
