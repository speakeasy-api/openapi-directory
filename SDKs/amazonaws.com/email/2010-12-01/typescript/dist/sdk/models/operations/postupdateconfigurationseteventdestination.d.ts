import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateConfigurationSetEventDestinationActionEnum {
    UpdateConfigurationSetEventDestination = "UpdateConfigurationSetEventDestination"
}
export declare enum POSTUpdateConfigurationSetEventDestinationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTUpdateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    action: POSTUpdateConfigurationSetEventDestinationActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateConfigurationSetEventDestinationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
