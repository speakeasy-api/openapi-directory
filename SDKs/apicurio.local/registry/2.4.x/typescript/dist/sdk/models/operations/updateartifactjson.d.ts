import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateArtifactJsonRequest extends SpeakeasyBase {
    /**
     * The new content of the artifact being updated. This is often, but not always, JSON data
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
     * be a simple integer or a SemVer value.  If not provided, the server will assign a version number
     * automatically.
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
export declare class UpdateArtifactJsonResponse extends SpeakeasyBase {
    /**
     * When successful, returns the updated artifact metadata.
     */
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
