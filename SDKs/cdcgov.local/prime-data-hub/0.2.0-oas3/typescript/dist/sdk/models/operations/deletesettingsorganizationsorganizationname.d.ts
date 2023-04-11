import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSettingsOrganizationsOrganizationNameSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteSettingsOrganizationsOrganizationNameRequest extends SpeakeasyBase {
    /**
     * The name of the organization
     */
    organizationName: string;
}
export declare class DeleteSettingsOrganizationsOrganizationNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK, the organization setting was deleted
     */
    organization?: shared.Organization;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
