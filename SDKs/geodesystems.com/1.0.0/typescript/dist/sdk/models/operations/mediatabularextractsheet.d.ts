import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MediaTabularExtractsheetRequest extends SpeakeasyBase {
    /**
     * Sheets
     */
    arg1?: string;
    /**
     * Entry ID
     */
    entryid: string;
    /**
     * Output type  -don't change
     */
    output: string;
}
export declare class MediaTabularExtractsheetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
