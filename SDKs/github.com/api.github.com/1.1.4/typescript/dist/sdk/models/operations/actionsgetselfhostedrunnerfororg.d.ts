import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetSelfHostedRunnerForOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
export declare class ActionsGetSelfHostedRunnerForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    runner?: shared.Runner;
}
