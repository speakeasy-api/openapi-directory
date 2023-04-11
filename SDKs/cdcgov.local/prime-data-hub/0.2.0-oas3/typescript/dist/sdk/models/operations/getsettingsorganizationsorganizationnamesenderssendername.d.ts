import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
    /**
     * Fetch senders with this organization name
     */
    organizationName: string;
    /**
     * The name of a sender to the data hub
     */
    senderName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    sender?: shared.Sender;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
