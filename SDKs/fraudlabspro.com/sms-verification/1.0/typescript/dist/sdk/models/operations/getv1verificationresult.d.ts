import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Returns the API response in json (default) or xml format.
 */
export declare enum GetV1VerificationResultFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1VerificationResultRequest extends SpeakeasyBase {
    /**
     * Returns the API response in json (default) or xml format.
     */
    format?: GetV1VerificationResultFormatEnum;
    /**
     * FraudLabs Pro API key.
     */
    key: string;
    /**
     * The OTP that was sent to the recipient’s phone.
     */
    otp: string;
    /**
     * The unique ID that was returned by the Send Verification SMS API that triggered the OTP sms.
     */
    tranId: string;
}
export declare class GetV1VerificationResultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get verification response
     */
    getV1VerificationResult200ApplicationJSONString?: string;
}
