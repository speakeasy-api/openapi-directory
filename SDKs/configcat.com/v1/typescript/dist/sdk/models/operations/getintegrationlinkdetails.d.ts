import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIntegrationLinkDetailsRequest extends SpeakeasyBase {
    /**
     * The integration link's type.
     */
    integrationLinkType: shared.IntegrationLinkTypeEnum;
    /**
     * The key of the integration link.
     */
    key: string;
}
export declare class GetIntegrationLinkDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the details for the integration link returned.
     */
    integrationLinkDetailsModel?: shared.IntegrationLinkDetailsModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
