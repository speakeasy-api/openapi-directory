import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestUpdateArtifactRequest extends SpeakeasyBase {
    /**
     * The content of the artifact being tested. This is often, but not always, JSON data
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
     * The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
     */
    artifactId: string;
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
}
export declare class TestUpdateArtifactResponse extends SpeakeasyBase {
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
}
