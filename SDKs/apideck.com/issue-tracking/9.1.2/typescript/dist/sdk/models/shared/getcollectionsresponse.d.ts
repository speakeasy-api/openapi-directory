import { SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * List Collections
 */
export declare class GetCollectionsResponse extends SpeakeasyBase {
    data: Collection[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
