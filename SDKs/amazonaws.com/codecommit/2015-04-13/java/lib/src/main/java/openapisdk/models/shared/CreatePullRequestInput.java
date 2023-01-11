package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePullRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreatePullRequestInput withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreatePullRequestInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("targets")
    public Target[] targets;
    public CreatePullRequestInput withTargets(Target[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public CreatePullRequestInput withTitle(String title) {
        this.title = title;
        return this;
    }
}