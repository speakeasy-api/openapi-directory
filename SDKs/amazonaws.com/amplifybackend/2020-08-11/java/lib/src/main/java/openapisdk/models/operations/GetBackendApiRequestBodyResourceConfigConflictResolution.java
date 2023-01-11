package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendApiRequestBodyResourceConfigConflictResolution
 * The conflict resolution strategy for your data stored in the data models.
**/
public class GetBackendApiRequestBodyResourceConfigConflictResolution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolutionStrategy")
    public java.util.Map<String, Object> resolutionStrategy;
    public GetBackendApiRequestBodyResourceConfigConflictResolution withResolutionStrategy(java.util.Map<String, Object> resolutionStrategy) {
        this.resolutionStrategy = resolutionStrategy;
        return this;
    }
}