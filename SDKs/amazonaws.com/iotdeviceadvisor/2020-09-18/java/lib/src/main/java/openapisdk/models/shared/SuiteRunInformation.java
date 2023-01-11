package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * SuiteRunInformation
 * Information about the suite run.
**/
public class SuiteRunInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public SuiteRunInformation withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endAt")
    public OffsetDateTime endAt;
    public SuiteRunInformation withEndAt(OffsetDateTime endAt) {
        this.endAt = endAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Long failed;
    public SuiteRunInformation withFailed(Long failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passed")
    public Long passed;
    public SuiteRunInformation withPassed(Long passed) {
        this.passed = passed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startedAt")
    public OffsetDateTime startedAt;
    public SuiteRunInformation withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public SuiteRunStatusEnum status;
    public SuiteRunInformation withStatus(SuiteRunStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionId")
    public String suiteDefinitionId;
    public SuiteRunInformation withSuiteDefinitionId(String suiteDefinitionId) {
        this.suiteDefinitionId = suiteDefinitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionName")
    public String suiteDefinitionName;
    public SuiteRunInformation withSuiteDefinitionName(String suiteDefinitionName) {
        this.suiteDefinitionName = suiteDefinitionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteDefinitionVersion")
    public String suiteDefinitionVersion;
    public SuiteRunInformation withSuiteDefinitionVersion(String suiteDefinitionVersion) {
        this.suiteDefinitionVersion = suiteDefinitionVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteRunId")
    public String suiteRunId;
    public SuiteRunInformation withSuiteRunId(String suiteRunId) {
        this.suiteRunId = suiteRunId;
        return this;
    }
}