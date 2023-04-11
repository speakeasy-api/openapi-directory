import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListIdentitiesActionEnum {
    ListIdentities = "ListIdentities"
}
/**
 * The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities will be listed.
 */
export declare enum GETListIdentitiesIdentityTypeEnum {
    EmailAddress = "EmailAddress",
    Domain = "Domain"
}
export declare enum GETListIdentitiesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETListIdentitiesRequest extends SpeakeasyBase {
    action: GETListIdentitiesActionEnum;
    /**
     * The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities will be listed.
     */
    identityType?: GETListIdentitiesIdentityTypeEnum;
    /**
     * The maximum number of identities per page. Possible values are 1-1000 inclusive.
     */
    maxItems?: number;
    /**
     * The token to use for pagination.
     */
    nextToken?: string;
    version: GETListIdentitiesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListIdentitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
