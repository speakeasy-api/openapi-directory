import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationCoverage } from "./paginationcoverage";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { SupportedProperty } from "./supportedproperty";
export declare class ConnectorResource extends SpeakeasyBase {
    /**
     * Indicates if custom fields are supported on this resource.
     */
    customFieldsSupported?: boolean;
    /**
     * ID of the resource in the Connector's API (downstream)
     */
    downstreamId?: string;
    /**
     * Name of the resource in the Connector's API (downstream)
     */
    downstreamName?: string;
    /**
     * List of operations that are not supported on the downstream.
     */
    downstreamUnsupportedOperations?: string[];
    /**
     * ID of the resource, typically a lowercased version of name.
     */
    id?: string;
    /**
     * Name of the resource (plural)
     */
    name?: string;
    pagination?: PaginationCoverage;
    /**
     * Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource.
     */
    paginationSupported?: boolean;
    /**
     * Status of the resource. Resources with status live or beta are callable.
     */
    status?: ResourceStatusEnum;
    /**
     * Supported fields on the detail endpoint.
     */
    supportedFields?: SupportedProperty[];
    /**
     * Supported filters on the list endpoint of the resource.
     */
    supportedFilters?: string[];
    /**
     * Supported fields on the list endpoint.
     */
    supportedListFields?: SupportedProperty[];
    /**
     * List of supported operations on the resource.
     */
    supportedOperations?: string[];
    /**
     * Supported sorting properties on the list endpoint of the resource.
     */
    supportedSortBy?: string[];
}
