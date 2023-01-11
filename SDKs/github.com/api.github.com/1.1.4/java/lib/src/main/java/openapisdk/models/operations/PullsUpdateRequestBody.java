package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public String base;
    public PullsUpdateRequestBody withBase(String base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public PullsUpdateRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintainer_can_modify")
    public Boolean maintainerCanModify;
    public PullsUpdateRequestBody withMaintainerCanModify(Boolean maintainerCanModify) {
        this.maintainerCanModify = maintainerCanModify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public PullsUpdateRequestBodyStateEnum state;
    public PullsUpdateRequestBody withState(PullsUpdateRequestBodyStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PullsUpdateRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}