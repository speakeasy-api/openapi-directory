package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsCreateDiscussionLegacyRequestBody {
    @JsonProperty("body")
    public String body;
    public TeamsCreateDiscussionLegacyRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;
    public TeamsCreateDiscussionLegacyRequestBody withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public TeamsCreateDiscussionLegacyRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}