import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTemplatesDesignerTemplatesGetRequest extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class ListTemplatesDesignerTemplatesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Client Error
     */
    responseError?: shared.ResponseError;
    /**
     * Successful Response
     */
    responseOkListFillrEntitiesDesignerTemplateDesignerTemplate?: shared.ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
