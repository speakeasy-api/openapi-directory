import { SpeakeasyBase } from "../../../internal/utils";
import { KnowledgeBaseStatusEnum } from "./knowledgebasestatusenum";
import { KnowledgeBaseTypeEnum } from "./knowledgebasetypeenum";
import { RenderingConfiguration } from "./renderingconfiguration";
import { ServerSideEncryptionConfiguration } from "./serversideencryptionconfiguration";
import { SourceConfiguration } from "./sourceconfiguration";
/**
 * Summary information about the knowledge base.
 */
export declare class KnowledgeBaseSummary extends SpeakeasyBase {
    description?: string;
    knowledgeBaseArn: string;
    knowledgeBaseId: string;
    knowledgeBaseType: KnowledgeBaseTypeEnum;
    name: string;
    renderingConfiguration?: RenderingConfiguration;
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    sourceConfiguration?: SourceConfiguration;
    status: KnowledgeBaseStatusEnum;
    tags?: Record<string, string>;
}
