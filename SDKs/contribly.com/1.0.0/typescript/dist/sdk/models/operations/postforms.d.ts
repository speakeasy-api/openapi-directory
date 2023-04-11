import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostFormsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Form created
     */
    form?: shared.Form;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
