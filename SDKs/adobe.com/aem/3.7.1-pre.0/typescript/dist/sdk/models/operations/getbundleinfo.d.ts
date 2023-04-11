import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBundleInfoRequest extends SpeakeasyBase {
    name: string;
}
export declare class GetBundleInfoResponse extends SpeakeasyBase {
    /**
     * Retrieved bundle info
     */
    bundleInfo?: shared.BundleInfo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    getBundleInfoDefaultApplicationJSONString?: string;
}
