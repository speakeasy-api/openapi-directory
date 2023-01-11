package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateState {
    @JsonProperty("state")
    public ArtifactStateEnum state;
    public UpdateState withState(ArtifactStateEnum state) {
        this.state = state;
        return this;
    }
}