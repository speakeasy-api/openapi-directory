import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the type of the artifact being added. Possible values include:
 *
 * @remarks
 *
 * * Avro (`AVRO`)
 * * Protobuf (`PROTOBUF`)
 * * Protobuf File Descriptor (`PROTOBUF_FD`)
 * * JSON Schema (`JSON`)
 * * Kafka Connect (`KCONNECT`)
 * * OpenAPI (`OPENAPI`)
 * * AsyncAPI (`ASYNCAPI`)
 * * GraphQL (`GRAPHQL`)
 * * Web Services Description Language (`WSDL`)
 * * XML Schema (`XSD`)
 */
export declare enum CreateArtifactXRegistryArtifactTypeEnum {
    Avro = "AVRO",
    Protobuf = "PROTOBUF",
    ProtobufFd = "PROTOBUF_FD",
    Json = "JSON",
    Openapi = "OPENAPI",
    Asyncapi = "ASYNCAPI",
    Graphql = "GRAPHQL",
    Kconnect = "KCONNECT",
    Wsdl = "WSDL",
    Xsd = "XSD",
    Xml = "XML"
}
/**
 * Set this option to instruct the server on what to do if the artifact already exists.
 */
export declare enum CreateArtifactIfExistsEnum {
    Fail = "FAIL",
    Update = "UPDATE",
    Return = "RETURN",
    ReturnOrUpdate = "RETURN_OR_UPDATE"
}
export declare class CreateArtifactRequest extends SpeakeasyBase {
    /**
     * The content of the artifact being created. This is often, but not always, JSON data
     *
     * @remarks
     * representing one of the supported artifact types:
     *
     * * Avro (`AVRO`)
     * * Protobuf (`PROTOBUF`)
     * * Protobuf File Descriptor (`PROTOBUF_FD`)
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
     * * Protobuf File Descriptor (`PROTOBUF_FD`)
     * * JSON Schema (`JSON`)
     * * Kafka Connect (`KCONNECT`)
     * * OpenAPI (`OPENAPI`)
     * * AsyncAPI (`ASYNCAPI`)
     * * GraphQL (`GRAPHQL`)
     * * Web Services Description Language (`WSDL`)
     * * XML Schema (`XSD`)
     */
    xRegistryArtifactType?: CreateArtifactXRegistryArtifactTypeEnum;
    /**
     * Set this option to instruct the server on what to do if the artifact already exists.
     */
    ifExists?: CreateArtifactIfExistsEnum;
}
export declare class CreateArtifactResponse extends SpeakeasyBase {
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
}
