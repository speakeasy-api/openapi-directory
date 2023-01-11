package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateResolverRequestBodySyncConfig
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
public class CreateResolverRequestBodySyncConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictDetection")
    public openapisdk.models.shared.ConflictDetectionTypeEnum conflictDetection;
    public CreateResolverRequestBodySyncConfig withConflictDetection(openapisdk.models.shared.ConflictDetectionTypeEnum conflictDetection) {
        this.conflictDetection = conflictDetection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictHandler")
    public openapisdk.models.shared.ConflictHandlerTypeEnum conflictHandler;
    public CreateResolverRequestBodySyncConfig withConflictHandler(openapisdk.models.shared.ConflictHandlerTypeEnum conflictHandler) {
        this.conflictHandler = conflictHandler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaConflictHandlerConfig")
    public openapisdk.models.shared.LambdaConflictHandlerConfig lambdaConflictHandlerConfig;
    public CreateResolverRequestBodySyncConfig withLambdaConflictHandlerConfig(openapisdk.models.shared.LambdaConflictHandlerConfig lambdaConflictHandlerConfig) {
        this.lambdaConflictHandlerConfig = lambdaConflictHandlerConfig;
        return this;
    }
}