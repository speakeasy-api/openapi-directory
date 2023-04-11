import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostBundlesIdShareRequestBody extends SpeakeasyBase {
    /**
     * Note to include in email.
     */
    note?: string;
    /**
     * A list of recipients to share this bundle with. Required unless `to` is used.
     */
    recipients?: Record<string, any>[];
    /**
     * A list of email addresses to share this bundle with. Required unless `recipients` is used.
     */
    to?: string[];
}
export declare class PostBundlesIdShareRequest extends SpeakeasyBase {
    requestBody?: PostBundlesIdShareRequestBody;
    /**
     * Bundle ID.
     */
    id: number;
}
export declare class PostBundlesIdShareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
