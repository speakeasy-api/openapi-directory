import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAutomationsIdRequest extends SpeakeasyBase {
    /**
     * Automation ID.
     */
    id: number;
}
export declare class GetAutomationsIdResponse extends SpeakeasyBase {
    /**
     * The Automations object.
     */
    automationEntity?: shared.AutomationEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
