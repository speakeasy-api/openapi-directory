import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteRankExpressionActionEnum {
    DeleteRankExpression = "DeleteRankExpression"
}
export declare enum GETDeleteRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETDeleteRankExpressionRequest extends SpeakeasyBase {
    action: GETDeleteRankExpressionActionEnum;
    domainName: string;
    /**
     * The name of the <code>RankExpression</code> to delete.
     */
    rankName: string;
    version: GETDeleteRankExpressionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteRankExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
