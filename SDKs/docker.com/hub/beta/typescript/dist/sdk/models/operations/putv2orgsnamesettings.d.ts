import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutV2OrgsNameSettingsRequestBodyRestrictedImages extends SpeakeasyBase {
    /**
     * Allow usage of official images if "enabled" is `true`.
     */
    allowOfficialImages: boolean;
    /**
     * Allow usage of verified publisher images if "enabled" is `true`.
     */
    allowVerifiedPublishers: boolean;
    /**
     * Whether or not to restrict image usage for users in the organization.
     */
    enabled: boolean;
}
export declare class PutV2OrgsNameSettingsRequestBody extends SpeakeasyBase {
    restrictedImages: PutV2OrgsNameSettingsRequestBodyRestrictedImages;
}
export declare class PutV2OrgsNameSettingsRequest extends SpeakeasyBase {
    requestBody: PutV2OrgsNameSettingsRequestBody;
    /**
     * Name of the organization.
     */
    name: string;
}
export declare class PutV2OrgsNameSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    orgSettings?: shared.OrgSettings;
}
