import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOIDCConfigurationRequest extends SpeakeasyBase {
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetOIDCConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The workspace was not found.
     */
    error?: Record<string, any>;
}
