import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteIdentityActionEnum {
    DeleteIdentity = "DeleteIdentity"
}
export declare enum GETDeleteIdentityVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeleteIdentityRequest extends SpeakeasyBase {
    action: GETDeleteIdentityActionEnum;
    /**
     * The identity to be removed from the list of identities for the AWS Account.
     */
    identity: string;
    version: GETDeleteIdentityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
