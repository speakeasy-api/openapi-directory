import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDefineRankExpressionActionEnum {
    DefineRankExpression = "DefineRankExpression"
}
export declare enum POSTDefineRankExpressionVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class POSTDefineRankExpressionRequest extends SpeakeasyBase {
    action: POSTDefineRankExpressionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDefineRankExpressionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDefineRankExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
