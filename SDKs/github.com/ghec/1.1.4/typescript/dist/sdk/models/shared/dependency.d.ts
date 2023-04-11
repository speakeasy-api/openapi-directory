import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
 */
export declare enum DependencyRelationshipEnum {
    Direct = "direct",
    Indirect = "indirect"
}
/**
 * A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
 */
export declare enum DependencyScopeEnum {
    Runtime = "runtime",
    Development = "development"
}
export declare class Dependency extends SpeakeasyBase {
    /**
     * Array of package-url (PURLs) of direct child dependencies.
     */
    dependencies?: string[];
    /**
     * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
     */
    metadata?: Record<string, any>;
    /**
     * Package-url (PURL) of dependency. See https://github.com/package-url/purl-spec for more details.
     */
    packageUrl?: string;
    /**
     * A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
     */
    relationship?: DependencyRelationshipEnum;
    /**
     * A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
     */
    scope?: DependencyScopeEnum;
}
