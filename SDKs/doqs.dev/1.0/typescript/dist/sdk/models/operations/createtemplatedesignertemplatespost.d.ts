import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTemplateDesignerTemplatesPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Client Error
     */
    responseError?: shared.ResponseError;
    /**
     * Successful Response
     */
    responseOkDesignerTemplate?: shared.ResponseOkDesignerTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
