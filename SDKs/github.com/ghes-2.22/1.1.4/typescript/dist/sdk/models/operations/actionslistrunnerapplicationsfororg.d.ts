import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListRunnerApplicationsForOrgRequest extends SpeakeasyBase {
    org: string;
}
export declare class ActionsListRunnerApplicationsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    runnerApplications?: shared.RunnerApplication[];
}
