import { SpeakeasyBase } from "../../../internal/utils";
import { DefinitionDocument } from "./definitiondocument";
import { DependencyRevision } from "./dependencyrevision";
import { MetricsConfiguration } from "./metricsconfiguration";
import { SystemInstanceSummary } from "./systeminstancesummary";
/**
 * An object that contains a system instance definition and summary information.
 */
export declare class SystemInstanceDescription extends SpeakeasyBase {
    /**
     * A document that defines an entity.
     */
    definition?: DefinitionDocument;
    flowActionsRoleArn?: string;
    /**
     * An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
     */
    metricsConfiguration?: MetricsConfiguration;
    s3BucketName?: string;
    summary?: SystemInstanceSummary;
    validatedDependencyRevisions?: DependencyRevision[];
    validatedNamespaceVersion?: number;
}
