import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
import { DeploymentTargetEnum } from "./deploymenttargetenum";
import { MetricsConfiguration } from "./metricsconfiguration";
import { Tag } from "./tag";
export declare class CreateSystemInstanceRequest extends SpeakeasyBase {
    /**
     * A document that defines an entity.
     */
    definition: DefinitionDocument;
    flowActionsRoleArn?: string;
    greengrassGroupName?: string;
    /**
     * An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
     */
    metricsConfiguration?: MetricsConfiguration;
    s3BucketName?: string;
    tags?: Tag[];
    target: DeploymentTargetEnum;
}
