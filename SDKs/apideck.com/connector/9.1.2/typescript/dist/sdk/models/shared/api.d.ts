import { SpeakeasyBase } from "../../../internal/utils";
import { ApiStatusEnum } from "./apistatusenum";
import { ResourceStatusEnum } from "./resourcestatusenum";
export declare class ApiResources extends SpeakeasyBase {
    /**
     * Exclude from mapping coverage
     */
    excludedFromCoverage?: boolean;
    /**
     * ID of the resource, typically a lowercased version of its name.
     */
    id?: string;
    /**
     * Name of the resource (plural)
     */
    name?: string;
    /**
     * Status of the resource. Resources with status live or beta are callable.
     */
    status?: ResourceStatusEnum;
}
/**
 * Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.
 */
export declare enum ApiTypeEnum {
    Platform = "platform",
    Unified = "unified"
}
export declare class Api extends SpeakeasyBase {
    /**
     * Link to the API reference of the API.
     */
    apiReferenceUrl?: string;
    /**
     * List of categories the API belongs to.
     */
    categories?: string[];
    /**
     * Description of the API.
     */
    description?: string;
    /**
     * List of event types this API supports.
     */
    events?: string[];
    /**
     * ID of the API.
     */
    id?: string;
    /**
     * Name of the API.
     */
    name?: string;
    /**
     * ID of the Postman collection of the API.
     */
    postmanCollectionId?: string;
    /**
     * List of resources supported in this API.
     */
    resources?: ApiResources[];
    /**
     * Link to the latest OpenAPI specification of the API.
     */
    specUrl?: string;
    /**
     * Status of the API. APIs with status live or beta are callable.
     */
    status?: ApiStatusEnum;
    /**
     * Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.
     */
    type?: ApiTypeEnum;
}
