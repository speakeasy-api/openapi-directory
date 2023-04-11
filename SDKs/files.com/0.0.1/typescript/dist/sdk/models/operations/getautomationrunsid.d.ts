import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomationRunsIdRequest extends SpeakeasyBase {
    /**
     * Automation Run ID.
     */
    id: number;
}
export declare class GetAutomationRunsIdResponse extends SpeakeasyBase {
    /**
     * The AutomationRuns object.
     */
    automationRunEntity?: shared.AutomationRunEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
