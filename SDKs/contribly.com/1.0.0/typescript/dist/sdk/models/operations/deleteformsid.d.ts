import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteFormsIdRequest extends SpeakeasyBase {
    /**
     * Id of the form to delete
     */
    id: string;
}
export declare class DeleteFormsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
