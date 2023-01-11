package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartSuiteRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public StartSuiteRunResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteRunArn")
    public String suiteRunArn;
    public StartSuiteRunResponse withSuiteRunArn(String suiteRunArn) {
        this.suiteRunArn = suiteRunArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suiteRunId")
    public String suiteRunId;
    public StartSuiteRunResponse withSuiteRunId(String suiteRunId) {
        this.suiteRunId = suiteRunId;
        return this;
    }
}