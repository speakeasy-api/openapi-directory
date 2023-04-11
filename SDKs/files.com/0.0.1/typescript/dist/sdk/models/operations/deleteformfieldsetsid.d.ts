import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFormFieldSetsIdRequest extends SpeakeasyBase {
    /**
     * Form Field Set ID.
     */
    id: number;
}
export declare class DeleteFormFieldSetsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
