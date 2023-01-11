package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFindingsFilterRequestBody {
    @JsonProperty("action")
    public CreateFindingsFilterRequestBodyActionEnum action;
    public CreateFindingsFilterRequestBody withAction(CreateFindingsFilterRequestBodyActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateFindingsFilterRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateFindingsFilterRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("findingCriteria")
    public CreateFindingsFilterRequestBodyFindingCriteria findingCriteria;
    public CreateFindingsFilterRequestBody withFindingCriteria(CreateFindingsFilterRequestBodyFindingCriteria findingCriteria) {
        this.findingCriteria = findingCriteria;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateFindingsFilterRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public CreateFindingsFilterRequestBody withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateFindingsFilterRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}