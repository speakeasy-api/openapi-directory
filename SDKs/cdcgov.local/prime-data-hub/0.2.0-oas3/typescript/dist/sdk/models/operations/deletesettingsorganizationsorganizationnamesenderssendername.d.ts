import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
    /**
     * the organization name
     */
    organizationName: string;
    /**
     * The name of a sender to the data hub
     */
    senderName: string;
}
export declare class DeleteSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK, the sender was deleted
     */
    sender?: shared.Sender;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
