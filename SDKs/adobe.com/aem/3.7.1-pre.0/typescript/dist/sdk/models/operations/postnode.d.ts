import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostNodeRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostNodeRequestBody extends SpeakeasyBase {
    file?: PostNodeRequestBodyFile;
}
export declare class PostNodeRequest extends SpeakeasyBase {
    operation?: string;
    requestBody?: PostNodeRequestBody;
    deleteAuthorizable?: string;
    name: string;
    path: string;
}
export declare class PostNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
