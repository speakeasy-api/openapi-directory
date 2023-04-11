import { ArtifactRules } from "./artifactrules";
import { Artifacts } from "./artifacts";
import { GlobalRules } from "./globalrules";
import { Metadata } from "./metadata";
import { Search } from "./search";
import { Versions } from "./versions";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://apicurio.local"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Apicurio Registry is a datastore for standard event schemas and API designs. Apicurio Registry enables developers to manage and share the structure of their data using a REST interface. For example, client applications can dynamically push or pull the latest updates to or from the registry without needing to redeploy. Apicurio Registry also enables developers to create rules that govern how registry content can evolve over time. For example, this includes rules for content validation and version compatibility.
 *
 * @remarks
 *
 * The Apicurio Registry REST API enables client applications to manage the artifacts in the registry. This API provides create, read, update, and delete operations for schema and API artifacts, rules, versions, and metadata.
 *
 * The supported artifact types include:
 * - Apache Avro schema
 * - AsyncAPI specification
 * - Google protocol buffers (schema and file descriptor)
 * - GraphQL schema
 * - JSON Schema
 * - Kafka Connect schema
 * - OpenAPI specification
 * - Web Services Description Language
 * - XML Schema Definition
 *
 *
 * **Note**: The Apicurio Registry REST API is available from `http://MY-REGISTRY-URL/api`. You must prefix all API operation paths with `/api`, for example, `api/ids/{globalId}`.
 *
 */
export declare class SDK {
    /**
     * Rules can be configured on a per-artifact basis, allowing for different approaches
     *
     * @remarks
     * to content evolution for each artifact.  These rules will override any global rules
     * that have been configured.  This section contains the operations used to manage a
     * single artifact's rules.
     */
    artifactRules: ArtifactRules;
    /**
     * The primary way to interact with the Apicurio Registry API is to add, update,
     *
     * @remarks
     * or delete artifacts. This section includes all of these primary operations.
     */
    artifacts: Artifacts;
    /**
     * Global rules can be configured in the registry to govern how artifact content can
     *
     * @remarks
     * evolve over time (as artifact content is **updated**). Global rules will be applied
     * whenever an artifact is added to the registry, and also whenever an artifact's
     * content is updated (only if that artifact doesn't have its own specific rules
     * configured). This section describes the operations used to manage the global rules.
     */
    globalRules: GlobalRules;
    /**
     * Sometimes the metadata for an artifact is important. For example, metadata includes
     *
     * @remarks
     * when the artifact was created, last updated, and so on. This section contains
     * operations to access (and in some cases change) an artifact's metadata.
     */
    metadata: Metadata;
    /**
     * The search API is used to browse or find artifacts in the registry. This section describes the operations for searching for artifacts and versions.
     */
    search: Search;
    /**
     * Whenever an artifact's content is updated, the old versions of the artifact's content
     *
     * @remarks
     * are not lost.  All versions can be listed and accessed if necessary.  This section
     * describes the operations used to list and access all versions of an artifact's content
     * and metadata.
     */
    versions: Versions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
