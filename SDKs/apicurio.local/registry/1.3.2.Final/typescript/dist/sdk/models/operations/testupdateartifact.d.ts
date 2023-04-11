import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * This header parameter can be used to indicate the type of the artifact being added.  Possible values include:
 *
 * @remarks
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
export declare enum TestUpdateArtifactXRegistryArtifactTypeEnum {
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
export declare class TestUpdateArtifactRequest extends SpeakeasyBase {
    /**
     * The content of the artifact being tested. This is often, but not always, JSON data
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
     * This header parameter can be used to indicate the type of the artifact being added.  Possible values include:
     *
     * @remarks
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
    xRegistryArtifactType?: TestUpdateArtifactXRegistryArtifactTypeEnum;
    /**
     * The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
     */
    artifactId: string;
}
export declare class TestUpdateArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response for all operations that can return a `404` error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
