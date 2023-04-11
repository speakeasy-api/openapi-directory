import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchFormFieldSetsIdRequest extends SpeakeasyBase {
    /**
     * Form Field Set ID.
     */
    id: number;
    patchFormFieldSets: shared.PatchFormFieldSets;
}
export declare class PatchFormFieldSetsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The FormFieldSets object.
     */
    formFieldSetEntity?: shared.FormFieldSetEntity;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
