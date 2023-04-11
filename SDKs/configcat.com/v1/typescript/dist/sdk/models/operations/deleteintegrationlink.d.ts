import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteIntegrationLinkRequest extends SpeakeasyBase {
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
    /**
     * The integration's type.
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
export declare class DeleteIntegrationLinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok.
     */
    deleteIntegrationLinkModel?: shared.DeleteIntegrationLinkModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
