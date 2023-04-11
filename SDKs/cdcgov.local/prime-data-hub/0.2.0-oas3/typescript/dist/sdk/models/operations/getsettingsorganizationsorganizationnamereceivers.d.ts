import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingsOrganizationsOrganizationNameReceiversSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversRequest extends SpeakeasyBase {
    /**
     * Fetch receivers with this organization name
     */
    organizationName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameReceiversResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    receivers?: shared.Receiver[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
