import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteExpressionActionEnum {
    DeleteExpression = "DeleteExpression"
}
export declare enum GETDeleteExpressionVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETDeleteExpressionRequest extends SpeakeasyBase {
    action: GETDeleteExpressionActionEnum;
    domainName: string;
    /**
     * The name of the <code><a>Expression</a></code> to delete.
     */
    expressionName: string;
    version: GETDeleteExpressionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteExpressionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
