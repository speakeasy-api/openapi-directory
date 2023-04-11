import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTemplateDesignerTemplatesIdPutRequest extends SpeakeasyBase {
    createOrUpdateTemplateRequest: shared.CreateOrUpdateTemplateRequest;
    id: string;
}
export declare class UpdateTemplateDesignerTemplatesIdPutResponse extends SpeakeasyBase {
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
