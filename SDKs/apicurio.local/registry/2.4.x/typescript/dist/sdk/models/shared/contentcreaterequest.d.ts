import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactReference } from "./artifactreference";
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
export declare class ContentCreateRequest extends SpeakeasyBase {
    /**
     * Raw content of the artifact or a valid (and accessible) URL where the content can be found.
     */
    content: string;
    /**
     * Collection of references to other artifacts.
     */
    references: ArtifactReference[];
}
