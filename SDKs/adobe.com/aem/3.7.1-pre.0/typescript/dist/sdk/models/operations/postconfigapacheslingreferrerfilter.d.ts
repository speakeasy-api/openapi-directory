import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostConfigApacheSlingReferrerFilterRequest extends SpeakeasyBase {
    allowEmpty?: boolean;
    allowEmptyAtTypeHint?: string;
    allowHosts?: string;
    allowHostsRegexp?: string;
    allowHostsRegexpAtTypeHint?: string;
    allowHostsAtTypeHint?: string;
    filterMethods?: string;
    filterMethodsAtTypeHint?: string;
}
export declare class PostConfigApacheSlingReferrerFilterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
