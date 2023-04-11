import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetTransitGatewayPolicyTableEntriesActionEnum {
    GetTransitGatewayPolicyTableEntries = "GetTransitGatewayPolicyTableEntries"
}
export declare enum POSTGetTransitGatewayPolicyTableEntriesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetTransitGatewayPolicyTableEntriesRequest extends SpeakeasyBase {
    action: POSTGetTransitGatewayPolicyTableEntriesActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetTransitGatewayPolicyTableEntriesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetTransitGatewayPolicyTableEntriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
