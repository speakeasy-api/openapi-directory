import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionUser } from "./collectionuser";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Users
 */
export declare class GetCollectionUsersResponse extends SpeakeasyBase {
    data: CollectionUser[];
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
