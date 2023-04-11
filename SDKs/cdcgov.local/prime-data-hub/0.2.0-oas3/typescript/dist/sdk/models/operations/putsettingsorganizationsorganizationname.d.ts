import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PutSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
    organizationInput?: shared.OrganizationInput;
    /**
     * The name of the organization
     */
    organizationName: string;
}
export declare class PutSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK, the organization setting was updated
     */
    organization?: shared.Organization;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
