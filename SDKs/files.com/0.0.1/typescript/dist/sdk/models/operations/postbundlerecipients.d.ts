import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBundleRecipientsRequestBody extends SpeakeasyBase {
    /**
     * Bundle to share.
     */
    bundleId: number;
    /**
     * Company of recipient.
     */
    company?: string;
    /**
     * Name of recipient.
     */
    name?: string;
    /**
     * Note to include in email.
     */
    note?: string;
    /**
     * Email addresses to share this bundle with.
     */
    recipient: string;
    /**
     * Set to true to share the link with the recipient upon creation.
     */
    shareAfterCreate?: boolean;
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     */
    userId?: number;
}
export declare class PostBundleRecipientsResponse extends SpeakeasyBase {
    /**
     * The BundleRecipients object.
     */
    bundleRecipientEntity?: shared.BundleRecipientEntity;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
