import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalysisCategoriesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultAnalysisCategoryDto?: shared.PageResultAnalysisCategoryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
