import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListConfigurationSetsActionEnum {
    ListConfigurationSets = "ListConfigurationSets"
}
export declare enum GETListConfigurationSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETListConfigurationSetsRequest extends SpeakeasyBase {
    action: GETListConfigurationSetsActionEnum;
    /**
     * The number of configuration sets to return.
     */
    maxItems?: number;
    /**
     * A token returned from a previous call to <code>ListConfigurationSets</code> to indicate the position of the configuration set in the configuration set list.
     */
    nextToken?: string;
    version: GETListConfigurationSetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListConfigurationSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
