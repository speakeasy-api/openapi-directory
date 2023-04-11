import { SpeakeasyBase } from "../../../internal/utils";
import { ApiResource } from "./apiresource";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * ApiResources
 */
export declare class GetApiResourceResponse extends SpeakeasyBase {
    data: ApiResource;
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
