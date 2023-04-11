import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteUsageLimitActionEnum {
    DeleteUsageLimit = "DeleteUsageLimit"
}
export declare enum GETDeleteUsageLimitVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDeleteUsageLimitRequest extends SpeakeasyBase {
    action: GETDeleteUsageLimitActionEnum;
    /**
     * The identifier of the usage limit to delete.
     */
    usageLimitId: string;
    version: GETDeleteUsageLimitVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteUsageLimitResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
