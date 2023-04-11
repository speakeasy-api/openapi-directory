import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectsSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. An array of projects
     */
    projectPrivates?: shared.ProjectPrivate[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
