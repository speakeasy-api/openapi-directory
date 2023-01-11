package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChecksUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public ChecksUpdateRequestBodyActions[] actions;
    public ChecksUpdateRequestBody withActions(ChecksUpdateRequestBodyActions[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completed_at")
    public String completedAt;
    public ChecksUpdateRequestBody withCompletedAt(String completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conclusion")
    public ChecksUpdateRequestBodyConclusionEnum conclusion;
    public ChecksUpdateRequestBody withConclusion(ChecksUpdateRequestBodyConclusionEnum conclusion) {
        this.conclusion = conclusion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details_url")
    public String detailsUrl;
    public ChecksUpdateRequestBody withDetailsUrl(String detailsUrl) {
        this.detailsUrl = detailsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_id")
    public String externalId;
    public ChecksUpdateRequestBody withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ChecksUpdateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public ChecksUpdateRequestBodyOutput output;
    public ChecksUpdateRequestBody withOutput(ChecksUpdateRequestBodyOutput output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("started_at")
    public String startedAt;
    public ChecksUpdateRequestBody withStartedAt(String startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ChecksUpdateRequestBodyStatusEnum status;
    public ChecksUpdateRequestBody withStatus(ChecksUpdateRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}