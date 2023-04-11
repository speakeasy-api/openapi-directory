import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSubsiteRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Linux hosting domain name.
     */
    domainNameQueryParameter: string;
    /**
     * Automatically added
     */
    siteNamePathParameter: string;
    /**
     * Name of the site on the linux hosting.
     */
    siteNameQueryParameter: string;
}
export declare class DeleteSubsiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
