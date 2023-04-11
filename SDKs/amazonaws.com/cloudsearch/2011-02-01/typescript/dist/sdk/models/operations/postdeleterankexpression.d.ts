import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteRankExpressionActionEnum {
    DeleteRankExpression = "DeleteRankExpression"
}
export declare enum POSTDeleteRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class POSTDeleteRankExpressionRequest extends SpeakeasyBase {
    action: POSTDeleteRankExpressionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteRankExpressionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteRankExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
