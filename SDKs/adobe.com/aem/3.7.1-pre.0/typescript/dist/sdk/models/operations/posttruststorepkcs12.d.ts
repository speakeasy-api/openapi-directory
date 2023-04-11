import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostTruststorePkcs12RequestBodyTruststoreP12 extends SpeakeasyBase {
    content: Uint8Array;
    truststoreP12: string;
}
export declare class PostTruststorePkcs12RequestBody extends SpeakeasyBase {
    truststoreP12?: PostTruststorePkcs12RequestBodyTruststoreP12;
}
export declare class PostTruststorePkcs12Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postTruststorePkcs12DefaultTextPlainString?: string;
}
