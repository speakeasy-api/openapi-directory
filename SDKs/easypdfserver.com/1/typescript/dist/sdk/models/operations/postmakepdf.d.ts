import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Pass the API key from easypdfserver.com and either HTML or URL to generate your PDF.
 */
export declare class PostMakePdfRequestBody extends SpeakeasyBase {
    html?: string;
    key: string;
    url?: string;
}
export declare class PostMakePdfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Your PDF file
     */
    postMakePdf200ApplicationPdfBinaryString?: Uint8Array;
}
