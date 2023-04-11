import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingsOrganizationsOrganizationNameSendersSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersRequest extends SpeakeasyBase {
    /**
     * Fetch senders with this organization name
     */
    organizationName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    senders?: shared.Sender[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
