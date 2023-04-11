import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.
 */
export declare class DeleteExpressionRequest extends SpeakeasyBase {
    /**
     * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
     */
    domainName: string;
    expressionName: string;
}
