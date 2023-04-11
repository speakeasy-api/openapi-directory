import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFormsIdRequest extends SpeakeasyBase {
    /**
     * Id of the form to return
     */
    id: string;
}
export declare class GetFormsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Form found
     */
    form?: shared.Form;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
