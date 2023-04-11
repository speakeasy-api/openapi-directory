import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2OrgsNameSettingsRequest extends SpeakeasyBase {
    /**
     * Name of the organization.
     */
    name: string;
}
export declare class GetV2OrgsNameSettingsResponse extends SpeakeasyBase {
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
