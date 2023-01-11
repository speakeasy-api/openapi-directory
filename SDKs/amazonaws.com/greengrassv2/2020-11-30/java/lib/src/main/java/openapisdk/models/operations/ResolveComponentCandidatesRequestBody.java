package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResolveComponentCandidatesRequestBody {
    @JsonProperty("componentCandidates")
    public openapisdk.models.shared.ComponentCandidate[] componentCandidates;
    public ResolveComponentCandidatesRequestBody withComponentCandidates(openapisdk.models.shared.ComponentCandidate[] componentCandidates) {
        this.componentCandidates = componentCandidates;
        return this;
    }
    @JsonProperty("platform")
    public ResolveComponentCandidatesRequestBodyPlatform platform;
    public ResolveComponentCandidatesRequestBody withPlatform(ResolveComponentCandidatesRequestBodyPlatform platform) {
        this.platform = platform;
        return this;
    }
}