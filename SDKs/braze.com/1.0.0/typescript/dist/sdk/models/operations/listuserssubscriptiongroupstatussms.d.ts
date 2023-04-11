import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListUserSSubscriptionGroupStatusSmsRequest extends SpeakeasyBase {
    /**
     * (Required*) String
     *
     * @remarks
     *
     * The `external_id` of the user (must include at least one and at most 50 `external_ids`).
     *
     * Only external_id or phone is accepted for SMS subscription groups
     *
     */
    externalId?: string;
    /**
     * (Required*) String
     *
     * @remarks
     *
     * The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.
     *
     * Only external_id or phone is accepted for SMS subscription groups
     *
     */
    phone?: string;
    /**
     * (Required) String
     *
     * @remarks
     *
     * The `id` of your subscription group.
     */
    subscriptionGroupId?: string;
}
export declare class ListUserSSubscriptionGroupStatusSmsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
