import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Returns the API response in json (default) or xml format.
 */
export declare enum PostV1VerificationSendFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class PostV1VerificationSendRequest extends SpeakeasyBase {
    /**
     * ISO 3166 country code for the recipient mobile phone number. If parameter is supplied, then some basic telephone number validation is done.
     */
    countryCode?: string;
    /**
     * Returns the API response in json (default) or xml format.
     */
    format?: PostV1VerificationSendFormatEnum;
    /**
     * FraudLabs Pro API key.
     */
    key: string;
    /**
     * The message template for the SMS. Add <otp> as placeholder for the actual OTP to be generated. Max length is 140 characters.
     */
    mesg?: string;
    /**
     * The recipient mobile phone number in E164 format which is a plus followed by just numbers with no spaces or parentheses.
     */
    tel: string;
}
export declare class PostV1VerificationSendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * send verification response
     */
    postV1VerificationSend200ApplicationJSONString?: string;
}
