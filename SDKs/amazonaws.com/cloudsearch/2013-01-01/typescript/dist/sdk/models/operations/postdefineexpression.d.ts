import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDefineExpressionActionEnum {
    DefineExpression = "DefineExpression"
}
export declare enum POSTDefineExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDefineExpressionRequest extends SpeakeasyBase {
    action: POSTDefineExpressionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDefineExpressionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDefineExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
