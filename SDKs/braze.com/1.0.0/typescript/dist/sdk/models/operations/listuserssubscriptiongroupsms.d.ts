import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListUserSSubscriptionGroupSmsRequest extends SpeakeasyBase {
    /**
     * (Required*) String
     *
     * @remarks
     *
     * The external_id of the user. Must include at least one and at most 50 `external_ids`.
     */
    externalId?: string;
    /**
     * (Optional) Integer
     *
     * @remarks
     *
     * The limit on the maximum number of results returned. Default (and max) limit is 100.
     */
    limit?: string;
    /**
     * (Optional) Integer
     *
     * @remarks
     *
     * Number of templates to skip before returning rest of the templates that fit the search criteria.
     */
    offset?: string;
    /**
     * (Required*) String
     *
     * @remarks
     *
     * The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.
     *
     */
    phone?: string;
}
export declare class ListUserSSubscriptionGroupSmsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
