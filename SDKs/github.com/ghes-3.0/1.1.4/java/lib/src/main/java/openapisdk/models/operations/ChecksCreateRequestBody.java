package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ChecksCreateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public ChecksCreateRequestBodyActions[] actions;
    public ChecksCreateRequestBody withActions(ChecksCreateRequestBodyActions[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completed_at")
    public OffsetDateTime completedAt;
    public ChecksCreateRequestBody withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conclusion")
    public ChecksCreateRequestBodyConclusionEnum conclusion;
    public ChecksCreateRequestBody withConclusion(ChecksCreateRequestBodyConclusionEnum conclusion) {
        this.conclusion = conclusion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details_url")
    public String detailsUrl;
    public ChecksCreateRequestBody withDetailsUrl(String detailsUrl) {
        this.detailsUrl = detailsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_id")
    public String externalId;
    public ChecksCreateRequestBody withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("head_sha")
    public String headSha;
    public ChecksCreateRequestBody withHeadSha(String headSha) {
        this.headSha = headSha;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ChecksCreateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public ChecksCreateRequestBodyOutput output;
    public ChecksCreateRequestBody withOutput(ChecksCreateRequestBodyOutput output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("started_at")
    public OffsetDateTime startedAt;
    public ChecksCreateRequestBody withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ChecksCreateRequestBodyStatusEnum status;
    public ChecksCreateRequestBody withStatus(ChecksCreateRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
}