import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteTemplatesIdDeleteRequest extends SpeakeasyBase {
    id: string;
}
export declare class DeleteTemplatesIdDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Client Error
     */
    responseError?: shared.ResponseError;
    /**
     * Successful Response
     */
    responseOkNoneType?: shared.ResponseOkNoneType;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
