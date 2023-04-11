import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListStreamingDistributions20171030Request extends SpeakeasyBase {
    /**
     * The value that you provided for the <code>Marker</code> request parameter.
     */
    marker?: string;
    /**
     * The value that you provided for the <code>MaxItems</code> request parameter.
     */
    maxItems?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamingDistributions20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
