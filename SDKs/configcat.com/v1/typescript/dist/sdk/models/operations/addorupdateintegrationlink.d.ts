import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddOrUpdateIntegrationLinkRequest extends SpeakeasyBase {
    addOrUpdateIntegrationLinkModel?: shared.AddOrUpdateIntegrationLinkModel;
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
    /**
     * The integration link's type.
     */
    integrationLinkType: shared.IntegrationLinkTypeEnum;
    /**
     * The key of the integration link.
     */
    key: string;
    /**
     * The id of the Setting.
     */
    settingId: number;
}
export declare class AddOrUpdateIntegrationLinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the integration link data returned.
     */
    integrationLinkModel?: shared.IntegrationLinkModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
