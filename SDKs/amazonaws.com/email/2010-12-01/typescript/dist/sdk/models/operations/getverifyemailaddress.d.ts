import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETVerifyEmailAddressActionEnum {
    VerifyEmailAddress = "VerifyEmailAddress"
}
export declare enum GETVerifyEmailAddressVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETVerifyEmailAddressRequest extends SpeakeasyBase {
    action: GETVerifyEmailAddressActionEnum;
    /**
     * The email address to be verified.
     */
    emailAddress: string;
    version: GETVerifyEmailAddressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETVerifyEmailAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
