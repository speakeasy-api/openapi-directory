import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
    /**
     * The name of the organization
     */
    organizationName: string;
}
export declare class GetSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    organization?: shared.Organization;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
