import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDefineExpressionActionEnum {
    DefineExpression = "DefineExpression"
}
/**
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.
 */
export declare class GETDefineExpressionExpression extends SpeakeasyBase {
    /**
     * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
     */
    expressionName: string;
    /**
     * The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.
     */
    expressionValue: string;
}
export declare enum GETDefineExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETDefineExpressionRequest extends SpeakeasyBase {
    action: GETDefineExpressionActionEnum;
    domainName: string;
    /**
     * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.
     */
    expression: GETDefineExpressionExpression;
    version: GETDefineExpressionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDefineExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
