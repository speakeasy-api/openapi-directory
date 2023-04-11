import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteExpressionActionEnum {
    DeleteExpression = "DeleteExpression"
}
export declare enum POSTDeleteExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDeleteExpressionRequest extends SpeakeasyBase {
    action: POSTDeleteExpressionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteExpressionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
