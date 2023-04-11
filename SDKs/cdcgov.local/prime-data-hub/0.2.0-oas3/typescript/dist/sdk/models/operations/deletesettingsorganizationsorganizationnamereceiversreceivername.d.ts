import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
    /**
     * the organization name
     */
    organizationName: string;
    /**
     * The name of the receiver
     */
    receiverName: string;
}
export declare class DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK, the receiver was deleted
     */
    receiver?: shared.Receiver;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
