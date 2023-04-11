import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";
export declare class ApiResourceLinkedResources extends SpeakeasyBase {
    /**
     * ID of the resource, typically a lowercased version of name.
     */
    id?: string;
    /**
     * Name of the property in our Unified API.
     */
    unifiedProperty?: string;
}
export declare class ApiResource extends SpeakeasyBase {
    /**
     * ID of the resource, typically a lowercased version of name.
     */
    id?: string;
    /**
     * List of linked resources.
     */
    linkedResources?: ApiResourceLinkedResources[];
    /**
     * Name of the resource (plural)
     */
    name?: string;
    /**
     * JSON Schema of the resource in our Unified API
     */
    schema?: Record<string, any>;
    /**
     * Status of the resource. Resources with status live or beta are callable.
     */
    status?: ResourceStatusEnum;
}
