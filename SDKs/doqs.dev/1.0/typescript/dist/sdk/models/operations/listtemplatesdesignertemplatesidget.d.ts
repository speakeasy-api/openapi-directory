import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTemplatesDesignerTemplatesIdGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class ListTemplatesDesignerTemplatesIdGetResponse extends SpeakeasyBase {
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
