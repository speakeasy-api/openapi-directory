import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSwapEnvironmentCNAMEsActionEnum {
    SwapEnvironmentCNAMEs = "SwapEnvironmentCNAMEs"
}
export declare enum POSTSwapEnvironmentCNAMEsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTSwapEnvironmentCNAMEsRequest extends SpeakeasyBase {
    action: POSTSwapEnvironmentCNAMEsActionEnum;
    requestBody?: Uint8Array;
    version: POSTSwapEnvironmentCNAMEsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSwapEnvironmentCNAMEsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
