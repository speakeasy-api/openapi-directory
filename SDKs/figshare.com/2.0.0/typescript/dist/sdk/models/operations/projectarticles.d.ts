import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectArticlesRequest extends SpeakeasyBase {
    /**
     * Project Unique identifier
     */
    projectId: number;
}
export declare class ProjectArticlesResponse extends SpeakeasyBase {
    /**
     * OK. Project articles list
     */
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
