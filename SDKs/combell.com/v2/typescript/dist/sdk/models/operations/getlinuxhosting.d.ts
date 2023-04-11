import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLinuxHostingRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * The Linux hosting domain name.
     */
    domainNameQueryParameter: string;
}
export declare class GetLinuxHostingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    linuxHostingDetail?: shared.LinuxHostingDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
