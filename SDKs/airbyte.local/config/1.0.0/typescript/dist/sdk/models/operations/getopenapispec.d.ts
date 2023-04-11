import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOpenApiSpecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the openapi specification file
     */
    getOpenApiSpec200TextPlainBinaryString?: Uint8Array;
}
