import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCategoriesListResponse extends SpeakeasyBase {
    /**
     * OK. An array of categories
     */
    categories?: shared.Category[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
