import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListSSHPublicKeysActionEnum {
    ListSSHPublicKeys = "ListSSHPublicKeys"
}
export declare enum POSTListSSHPublicKeysVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListSSHPublicKeysRequest extends SpeakeasyBase {
    action: POSTListSSHPublicKeysActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListSSHPublicKeysVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListSSHPublicKeysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
