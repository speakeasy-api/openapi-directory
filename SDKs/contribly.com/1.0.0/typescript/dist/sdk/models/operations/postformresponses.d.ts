import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostFormResponsesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Form response saved
     */
    formResponse?: shared.FormResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
