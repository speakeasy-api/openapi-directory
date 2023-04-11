import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProjectDetailsRequest extends SpeakeasyBase {
    /**
     * Project Unique identifier
     */
    projectId: number;
}
export declare class ProjectDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. Project representation
     */
    projectComplete?: shared.ProjectComplete;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
