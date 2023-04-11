import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRequest extends SpeakeasyBase {
    updateTemplateRequest: shared.UpdateTemplateRequest;
    id: string;
}
export declare class UpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Client Error
     */
    responseError?: shared.ResponseError;
    /**
     * Successful Response
     */
    responseOkTemplate?: shared.ResponseOkTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
