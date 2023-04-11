import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDownloadDBLogFilePortionActionEnum {
    DownloadDBLogFilePortion = "DownloadDBLogFilePortion"
}
export declare enum POSTDownloadDBLogFilePortionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDownloadDBLogFilePortionRequest extends SpeakeasyBase {
    action: POSTDownloadDBLogFilePortionActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    numberOfLines?: string;
    requestBody?: Uint8Array;
    version: POSTDownloadDBLogFilePortionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDownloadDBLogFilePortionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
