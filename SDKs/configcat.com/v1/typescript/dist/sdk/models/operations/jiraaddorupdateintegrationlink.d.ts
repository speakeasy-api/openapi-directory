import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JiraAddOrUpdateIntegrationLinkRequest extends SpeakeasyBase {
    addOrUpdateJiraIntegrationLinkModel?: shared.AddOrUpdateJiraIntegrationLinkModel;
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
    /**
     * The key of the integration link.
     */
    key: string;
    /**
     * The id of the Setting.
     */
    settingId: number;
}
export declare class JiraAddOrUpdateIntegrationLinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the integration link data returned.
     */
    integrationLinkModel?: shared.IntegrationLinkModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
