import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETIdentityDkimAttributesActionEnum {
    GetIdentityDkimAttributes = "GetIdentityDkimAttributes"
}
export declare enum GETGETIdentityDkimAttributesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETGETIdentityDkimAttributesRequest extends SpeakeasyBase {
    action: GETGETIdentityDkimAttributesActionEnum;
    /**
     * A list of one or more verified identities - email addresses, domains, or both.
     */
    identities: string[];
    version: GETGETIdentityDkimAttributesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETIdentityDkimAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
