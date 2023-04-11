import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
    /**
     * Create receivers under this organization name
     */
    organizationName: string;
    /**
     * The name of the receiver
     */
    receiverName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    receiver?: shared.Receiver;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
