import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PreviewDesignerTemplatesPreviewPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Client Error
     */
    responseError?: shared.ResponseError;
    /**
     * Successful Response
     */
    responseOkPreviewResponse?: shared.ResponseOkPreviewResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
