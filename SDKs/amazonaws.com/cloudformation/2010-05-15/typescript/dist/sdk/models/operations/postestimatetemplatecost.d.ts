import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEstimateTemplateCostActionEnum {
    EstimateTemplateCost = "EstimateTemplateCost"
}
export declare enum POSTEstimateTemplateCostVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTEstimateTemplateCostRequest extends SpeakeasyBase {
    action: POSTEstimateTemplateCostActionEnum;
    requestBody?: Uint8Array;
    version: POSTEstimateTemplateCostVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEstimateTemplateCostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
