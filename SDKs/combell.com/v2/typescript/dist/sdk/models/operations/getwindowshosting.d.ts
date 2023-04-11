import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWindowsHostingRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * The Windows hosting domain name.
     */
    domainNameQueryParameter: string;
}
export declare class GetWindowsHostingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    windowsHostingDetail?: shared.WindowsHostingDetail;
}
