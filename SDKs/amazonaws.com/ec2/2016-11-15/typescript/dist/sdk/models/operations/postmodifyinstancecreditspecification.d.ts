import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyInstanceCreditSpecificationActionEnum {
    ModifyInstanceCreditSpecification = "ModifyInstanceCreditSpecification"
}
export declare enum POSTModifyInstanceCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyInstanceCreditSpecificationRequest extends SpeakeasyBase {
    action: POSTModifyInstanceCreditSpecificationActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyInstanceCreditSpecificationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyInstanceCreditSpecificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
