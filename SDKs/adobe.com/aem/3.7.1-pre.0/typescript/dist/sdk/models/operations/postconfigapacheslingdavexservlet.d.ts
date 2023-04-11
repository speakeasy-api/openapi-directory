import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostConfigApacheSlingDavExServletRequest extends SpeakeasyBase {
    alias?: string;
    aliasAtTypeHint?: string;
    davCreateAbsoluteUri?: boolean;
    davCreateAbsoluteUriAtTypeHint?: string;
}
export declare class PostConfigApacheSlingDavExServletResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
