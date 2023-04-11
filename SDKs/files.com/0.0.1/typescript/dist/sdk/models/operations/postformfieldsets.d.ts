import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostFormFieldSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FormFieldSets object.
     */
    formFieldSetEntity?: shared.FormFieldSetEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
