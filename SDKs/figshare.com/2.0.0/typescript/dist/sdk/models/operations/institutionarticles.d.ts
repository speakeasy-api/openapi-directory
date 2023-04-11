import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InstitutionArticlesRequest extends SpeakeasyBase {
    filename: string;
    institutionStringId: string;
    resourceId: string;
}
export declare class InstitutionArticlesResponse extends SpeakeasyBase {
    /**
     * OK. An array of articles
     */
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
