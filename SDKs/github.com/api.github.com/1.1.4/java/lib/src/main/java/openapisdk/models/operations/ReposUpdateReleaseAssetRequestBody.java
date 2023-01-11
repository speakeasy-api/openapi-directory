package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposUpdateReleaseAssetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public ReposUpdateReleaseAssetRequestBody withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ReposUpdateReleaseAssetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public ReposUpdateReleaseAssetRequestBody withState(String state) {
        this.state = state;
        return this;
    }
}