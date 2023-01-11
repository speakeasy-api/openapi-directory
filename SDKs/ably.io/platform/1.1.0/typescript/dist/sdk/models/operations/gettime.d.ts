import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTimeQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class GetTimeHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetTimeRequest extends SpeakeasyBase {
    queryParams: GetTimeQueryParams;
    headers: GetTimeHeaders;
}
export declare class GetTimeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getTime2XXApplicationJSONIntegers?: number[];
    getTime2XXTextHTMLString?: string;
}
