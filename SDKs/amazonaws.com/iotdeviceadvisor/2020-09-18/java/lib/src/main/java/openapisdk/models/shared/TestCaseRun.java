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
 * TestCaseRun
 * Provides test case run.
**/
public class TestCaseRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endTime")
    public OffsetDateTime endTime;
    public TestCaseRun withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure")
    public String failure;
    public TestCaseRun withFailure(String failure) {
        this.failure = failure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logUrl")
    public String logUrl;
    public TestCaseRun withLogUrl(String logUrl) {
        this.logUrl = logUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public TestCaseRun withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StatusEnum status;
    public TestCaseRun withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testCaseDefinitionId")
    public String testCaseDefinitionId;
    public TestCaseRun withTestCaseDefinitionId(String testCaseDefinitionId) {
        this.testCaseDefinitionId = testCaseDefinitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testCaseDefinitionName")
    public String testCaseDefinitionName;
    public TestCaseRun withTestCaseDefinitionName(String testCaseDefinitionName) {
        this.testCaseDefinitionName = testCaseDefinitionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testCaseRunId")
    public String testCaseRunId;
    public TestCaseRun withTestCaseRunId(String testCaseRunId) {
        this.testCaseRunId = testCaseRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public String warnings;
    public TestCaseRun withWarnings(String warnings) {
        this.warnings = warnings;
        return this;
    }
}