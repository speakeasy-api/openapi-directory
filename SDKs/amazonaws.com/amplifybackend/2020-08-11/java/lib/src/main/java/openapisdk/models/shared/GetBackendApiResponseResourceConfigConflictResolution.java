package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendApiResponseResourceConfigConflictResolution
 * The conflict resolution strategy for your data stored in the data models.
**/
public class GetBackendApiResponseResourceConfigConflictResolution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResolutionStrategy")
    public java.util.Map<String, Object> resolutionStrategy;
    public GetBackendApiResponseResourceConfigConflictResolution withResolutionStrategy(java.util.Map<String, Object> resolutionStrategy) {
        this.resolutionStrategy = resolutionStrategy;
        return this;
    }
}