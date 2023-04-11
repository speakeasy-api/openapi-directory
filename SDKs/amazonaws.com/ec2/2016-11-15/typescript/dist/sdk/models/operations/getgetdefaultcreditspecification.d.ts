import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETDefaultCreditSpecificationActionEnum {
    GetDefaultCreditSpecification = "GetDefaultCreditSpecification"
}
/**
 * The instance family.
 */
export declare enum GETGETDefaultCreditSpecificationInstanceFamilyEnum {
    T2 = "t2",
    T3 = "t3",
    T3a = "t3a",
    T4g = "t4g"
}
export declare enum GETGETDefaultCreditSpecificationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETDefaultCreditSpecificationRequest extends SpeakeasyBase {
    action: GETGETDefaultCreditSpecificationActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The instance family.
     */
    instanceFamily: GETGETDefaultCreditSpecificationInstanceFamilyEnum;
    version: GETGETDefaultCreditSpecificationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETDefaultCreditSpecificationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
