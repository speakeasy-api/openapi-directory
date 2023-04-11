import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionUser } from "./collectionuser";
/**
 * User
 */
export declare class GetCollectionUserResponse extends SpeakeasyBase {
    data: CollectionUser;
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
