import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of all the projects you're following on CircleCI
     *
     * @remarks
     *
     */
    projects?: shared.Project[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
