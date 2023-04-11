import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest extends SpeakeasyBase {
    senderInput?: shared.SenderInput;
    /**
     * Fetch senders with this organization name
     */
    organizationName: string;
    /**
     * The name of a sender to the data hub
     */
    senderName: string;
}
export declare class PutSettingsOrganizationsOrganizationNameSendersSenderNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    senders?: shared.Sender[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
