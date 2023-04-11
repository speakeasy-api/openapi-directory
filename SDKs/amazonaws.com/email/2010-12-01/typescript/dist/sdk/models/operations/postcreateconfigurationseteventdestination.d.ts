import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateConfigurationSetEventDestinationActionEnum {
    CreateConfigurationSetEventDestination = "CreateConfigurationSetEventDestination"
}
export declare enum POSTCreateConfigurationSetEventDestinationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    action: POSTCreateConfigurationSetEventDestinationActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateConfigurationSetEventDestinationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
