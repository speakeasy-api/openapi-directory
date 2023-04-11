import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListConfigurationSetsActionEnum {
    ListConfigurationSets = "ListConfigurationSets"
}
export declare enum POSTListConfigurationSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTListConfigurationSetsRequest extends SpeakeasyBase {
    action: POSTListConfigurationSetsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListConfigurationSetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListConfigurationSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
