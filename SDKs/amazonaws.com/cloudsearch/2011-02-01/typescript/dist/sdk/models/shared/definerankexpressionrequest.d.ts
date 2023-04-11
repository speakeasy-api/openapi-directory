import { SpeakeasyBase } from "../../../internal/utils";
import { NamedRankExpression } from "./namedrankexpression";
export declare class DefineRankExpressionRequest extends SpeakeasyBase {
    /**
     * A string that represents the name of a domain. Domain names must be unique across the domains owned by an account within an AWS region. Domain names must start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen). Uppercase letters and underscores are not allowed.
     */
    domainName: string;
    /**
     * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.
     */
    rankExpression: NamedRankExpression;
}
