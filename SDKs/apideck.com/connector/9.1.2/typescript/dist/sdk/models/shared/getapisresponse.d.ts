import { SpeakeasyBase } from "../../../internal/utils";
import { Api } from "./api";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Apis
 */
export declare class GetApisResponse extends SpeakeasyBase {
    data: Api[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
