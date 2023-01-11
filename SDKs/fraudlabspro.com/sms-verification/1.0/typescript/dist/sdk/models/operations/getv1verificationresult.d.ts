import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetV1VerificationResultFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class GetV1VerificationResultQueryParams extends SpeakeasyBase {
    format?: GetV1VerificationResultFormatEnum;
    key: string;
    otp: string;
    tranId: string;
}
export declare class GetV1VerificationResultRequest extends SpeakeasyBase {
    queryParams: GetV1VerificationResultQueryParams;
}
export declare class GetV1VerificationResultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getV1VerificationResult200ApplicationJSONString?: string;
}
