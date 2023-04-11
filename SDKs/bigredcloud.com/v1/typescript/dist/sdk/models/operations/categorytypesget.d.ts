import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CategoryTypesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultCategoryTypeDto?: shared.PageResultCategoryTypeDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
