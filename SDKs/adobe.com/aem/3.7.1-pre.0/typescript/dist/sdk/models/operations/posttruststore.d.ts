import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostTruststoreRequestBodyCertificate extends SpeakeasyBase {
    certificate: string;
    content: Uint8Array;
}
export declare class PostTruststoreRequestBody extends SpeakeasyBase {
    certificate?: PostTruststoreRequestBodyCertificate;
}
export declare class PostTruststoreRequest extends SpeakeasyBase {
    operation?: string;
    requestBody?: PostTruststoreRequestBody;
    keyStoreType?: string;
    newPassword?: string;
    rePassword?: string;
    removeAlias?: string;
}
export declare class PostTruststoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postTruststoreDefaultTextPlainString?: string;
}
