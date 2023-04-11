import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostClientsRequestBody extends SpeakeasyBase {
    /**
     * custom config about the client
     */
    config?: string;
    /**
     * if True, generate a rsa pair of keys so the client can be used to generate jwt user tokens (default: False)
     */
    generateKeys?: boolean;
    /**
     * name of client
     */
    name?: string;
    /**
     * list of allowed redirect uris
     */
    redirectUris?: string;
}
export declare class PostClientsRequest extends SpeakeasyBase {
    requestBody?: PostClientsRequestBody;
    expand?: string;
}
export declare class PostClientsResponse extends SpeakeasyBase {
    /**
     * Successful POST on Client resource
     */
    client?: shared.Client;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
