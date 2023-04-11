import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateArtifactVersionJsonRequest extends SpeakeasyBase {
    /**
     * The content of the artifact version being created or the content and a set of references to other artifacts. This is often, but not always, JSON data
     *
     * @remarks
     * representing one of the supported artifact types:
     *
     * * Avro (`AVRO`)
     * * Protobuf (`PROTOBUF`)
     * * JSON Schema (`JSON`)
     * * Kafka Connect (`KCONNECT`)
     * * OpenAPI (`OPENAPI`)
     * * AsyncAPI (`ASYNCAPI`)
     * * GraphQL (`GRAPHQL`)
     * * Web Services Description Language (`WSDL`)
     * * XML Schema (`XSD`)
     *
     */
    contentCreateRequest: shared.ContentCreateRequest;
    /**
     * Specifies the artifact description of this new version of the artifact content. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content.
     */
    xRegistryDescription?: string;
    /**
     * Specifies the artifact description of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content.
     */
    xRegistryDescriptionEncoded?: string;
    /**
     * Specifies the artifact name of this new version of the artifact content. Name must be ASCII-only string. If this is not
     *
     * @remarks
     * provided, the server will extract the name from the artifact content.
     */
    xRegistryName?: string;
    /**
     * Specifies the artifact name of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content.
     */
    xRegistryNameEncoded?: string;
    /**
     * Specifies the version number of this new version of the artifact content.  This would typically
     *
     * @remarks
     * be a simple integer or a SemVer value.  It must be unique within the artifact.  If this is not
     * provided, the server will generate a new, unique version number for this new updated content.
     */
    xRegistryVersion?: string;
    /**
     * The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
}
export declare class CreateArtifactVersionJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    /**
     * Common response used when an input conflicts with existing data.
     */
    ruleViolationError?: shared.RuleViolationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The artifact version was successfully created.
     */
    versionMetaData?: shared.VersionMetaData;
}
