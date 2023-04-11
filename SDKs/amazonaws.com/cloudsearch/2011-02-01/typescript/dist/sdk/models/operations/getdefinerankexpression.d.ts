import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDefineRankExpressionActionEnum {
    DefineRankExpression = "DefineRankExpression"
}
/**
 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.
 */
export declare class GETDefineRankExpressionRankExpression extends SpeakeasyBase {
    rankExpression: string;
    rankName: string;
}
export declare enum GETDefineRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETDefineRankExpressionRequest extends SpeakeasyBase {
    action: GETDefineRankExpressionActionEnum;
    domainName: string;
    /**
     * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query.
     */
    rankExpression: GETDefineRankExpressionRankExpression;
    version: GETDefineRankExpressionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDefineRankExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
