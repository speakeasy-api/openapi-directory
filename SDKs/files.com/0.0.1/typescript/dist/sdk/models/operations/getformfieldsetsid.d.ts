import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFormFieldSetsIdRequest extends SpeakeasyBase {
    /**
     * Form Field Set ID.
     */
    id: number;
}
export declare class GetFormFieldSetsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FormFieldSets object.
     */
    formFieldSetEntity?: shared.FormFieldSetEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
