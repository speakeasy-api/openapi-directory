import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest extends SpeakeasyBase {
    receiverInput?: shared.ReceiverInput;
    /**
     * Create receivers under this organization name
     */
    organizationName: string;
    /**
     * The name of the receiver
     */
    receiverName: string;
}
export declare class PutSettingsOrganizationsOrganizationNameReceiversReceiverNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK, the receiver setting was updated
     */
    receiver?: shared.Receiver;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
