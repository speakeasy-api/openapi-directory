package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFindingsFilterRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public UpdateFindingsFilterRequestBodyActionEnum action;
    public UpdateFindingsFilterRequestBody withAction(UpdateFindingsFilterRequestBodyActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateFindingsFilterRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateFindingsFilterRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingCriteria")
    public UpdateFindingsFilterRequestBodyFindingCriteria findingCriteria;
    public UpdateFindingsFilterRequestBody withFindingCriteria(UpdateFindingsFilterRequestBodyFindingCriteria findingCriteria) {
        this.findingCriteria = findingCriteria;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateFindingsFilterRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public UpdateFindingsFilterRequestBody withPosition(Long position) {
        this.position = position;
        return this;
    }
}