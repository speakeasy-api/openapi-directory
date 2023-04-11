import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetDefaultCreditSpecificationActionEnum {
    GetDefaultCreditSpecification = "GetDefaultCreditSpecification"
}
export declare enum POSTGetDefaultCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetDefaultCreditSpecificationRequest extends SpeakeasyBase {
    action: POSTGetDefaultCreditSpecificationActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetDefaultCreditSpecificationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetDefaultCreditSpecificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
