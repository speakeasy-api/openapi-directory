package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResolveComponentCandidatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolvedComponentVersions")
    public ResolvedComponentVersion[] resolvedComponentVersions;
    public ResolveComponentCandidatesResponse withResolvedComponentVersions(ResolvedComponentVersion[] resolvedComponentVersions) {
        this.resolvedComponentVersions = resolvedComponentVersions;
        return this;
    }
}