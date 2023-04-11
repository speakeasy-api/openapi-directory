import { SpeakeasyBase } from "../../../internal/utils";
import { ActorDefinitionResourceRequirements } from "./actordefinitionresourcerequirements";
import { ReleaseStageEnum } from "./releasestageenum";
export declare enum SourceDefinitionReadSourceTypeEnum {
    Api = "api",
    File = "file",
    Database = "database",
    Custom = "custom"
}
/**
 * Successful operation
 */
export declare class SourceDefinitionRead extends SpeakeasyBase {
    dockerImageTag: string;
    dockerRepository: string;
    documentationUrl?: string;
    icon?: string;
    name: string;
    /**
     * The Airbyte Protocol version supported by the connector
     */
    protocolVersion?: string;
    /**
     * The date when this connector was first released, in yyyy-mm-dd format.
     */
    releaseDate?: Date;
    releaseStage?: ReleaseStageEnum;
    /**
     * actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.
     */
    resourceRequirements?: ActorDefinitionResourceRequirements;
    sourceDefinitionId: string;
    sourceType?: SourceDefinitionReadSourceTypeEnum;
}
