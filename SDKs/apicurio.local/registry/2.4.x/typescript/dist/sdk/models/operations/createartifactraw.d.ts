import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The algorithm to use when checking the content validity. (available: SHA256, MD5; default: SHA256)
 */
export declare enum CreateArtifactRawXRegistryHashAlgorithmEnum {
    Sha256 = "SHA256",
    Md5 = "MD5"
}
export declare class CreateArtifactRawRequest extends SpeakeasyBase {
    /**
     * The content of the artifact being created. This is often, but not always, JSON data
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
    requestBody: Uint8Array;
    /**
     * A client-provided, globally unique identifier for the new artifact.
     */
    xRegistryArtifactId?: string;
    /**
     * Specifies the type of the artifact being added. Possible values include:
     *
     * @remarks
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
     */
    xRegistryArtifactType?: string;
    /**
     * Specifies the (optional) hash of the artifact to be verified.
     */
    xRegistryContentHash?: string;
    /**
     * Specifies the description of artifact being added. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content.
     */
    xRegistryDescription?: string;
    /**
     * Specifies the description of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content.
     */
    xRegistryDescriptionEncoded?: string;
    /**
     * The algorithm to use when checking the content validity. (available: SHA256, MD5; default: SHA256)
     */
    xRegistryHashAlgorithm?: CreateArtifactRawXRegistryHashAlgorithmEnum;
    /**
     * Specifies the name of artifact being added. Name must be ASCII-only string. If this is not provided, the server will extract the name from the artifact content.
     */
    xRegistryName?: string;
    /**
     * Specifies the name of artifact being added. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content.
     */
    xRegistryNameEncoded?: string;
    /**
     * Specifies the version number of this initial version of the artifact content.  This would typically
     *
     * @remarks
     * be a simple integer or a SemVer value.  If not provided, the server will assign a version number
     * automatically (starting with version `1`).
     */
    xRegistryVersion?: string;
    /**
     * Used only when the `ifExists` query parameter is set to `RETURN_OR_UPDATE`, this parameter can be set to `true` to indicate that the server should "canonicalize" the content when searching for a matching version.  The canonicalization algorithm is unique to each artifact type, but typically involves removing extra whitespace and formatting the content in a consistent manner.
     */
    canonical?: boolean;
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
    /**
     * Set this option to instruct the server on what to do if the artifact already exists.
     */
    ifExists?: shared.IfExistsEnum;
}
export declare class CreateArtifactRawResponse extends SpeakeasyBase {
    /**
     * Artifact was successfully created.
     */
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    /**
     * Common response for all operations that can return a `400` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Common response used when an input conflicts with existing data.
     */
    ruleViolationError?: shared.RuleViolationError;
}
