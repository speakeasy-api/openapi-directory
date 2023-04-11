import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostConfigAemHealthCheckServletRequest extends SpeakeasyBase {
    bundlesIgnored?: string[];
    bundlesIgnoredAtTypeHint?: string;
}
export declare class PostConfigAemHealthCheckServletResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
