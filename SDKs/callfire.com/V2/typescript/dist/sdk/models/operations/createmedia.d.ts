import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateMediaSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMediaRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class CreateMediaRequestBody extends SpeakeasyBase {
    /**
     * Binary media file
     */
    file: CreateMediaRequestBodyFile;
    /**
     * A name of a media file
     */
    name?: string;
}
export declare class CreateMediaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    resourceId?: shared.ResourceId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
