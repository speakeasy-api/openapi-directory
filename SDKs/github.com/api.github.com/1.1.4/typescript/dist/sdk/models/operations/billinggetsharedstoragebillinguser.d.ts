import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BillingGetSharedStorageBillingUserRequest extends SpeakeasyBase {
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class BillingGetSharedStorageBillingUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    combinedBillingUsage?: shared.CombinedBillingUsage;
}
