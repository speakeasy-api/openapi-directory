import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationCoverage } from "./paginationcoverage";
import { ResourceStatusEnum } from "./resourcestatusenum";
import { SupportedProperty } from "./supportedproperty";
export declare class ApiResourceCoverageCoverage extends SpeakeasyBase {
    /**
     * ID of the resource in the Connector's API (downstream)
     */
    downstreamId?: string;
    /**
     * Name of the resource in the Connector's API (downstream)
     */
    downstreamName?: string;
    pagination?: PaginationCoverage;
    /**
     * Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource.
     */
    paginationSupported?: boolean;
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
export declare class ApiResourceCoverage extends SpeakeasyBase {
    coverage?: ApiResourceCoverageCoverage[];
    /**
     * ID of the resource, typically a lowercased version of name.
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
