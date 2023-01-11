package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SyncConfig
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
public class SyncConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictDetection")
    public ConflictDetectionTypeEnum conflictDetection;
    public SyncConfig withConflictDetection(ConflictDetectionTypeEnum conflictDetection) {
        this.conflictDetection = conflictDetection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conflictHandler")
    public ConflictHandlerTypeEnum conflictHandler;
    public SyncConfig withConflictHandler(ConflictHandlerTypeEnum conflictHandler) {
        this.conflictHandler = conflictHandler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaConflictHandlerConfig")
    public LambdaConflictHandlerConfig lambdaConflictHandlerConfig;
    public SyncConfig withLambdaConflictHandlerConfig(LambdaConflictHandlerConfig lambdaConflictHandlerConfig) {
        this.lambdaConflictHandlerConfig = lambdaConflictHandlerConfig;
        return this;
    }
}