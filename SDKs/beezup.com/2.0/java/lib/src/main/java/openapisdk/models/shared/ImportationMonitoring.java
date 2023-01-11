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
 * ImportationMonitoring
 * Describe the reporting of the catalog importation
**/
public class ImportationMonitoring {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("beginUtcDate")
    public OffsetDateTime beginUtcDate;
    public ImportationMonitoring withBeginUtcDate(OffsetDateTime beginUtcDate) {
        this.beginUtcDate = beginUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BeezUpCommonUserErrorMessage[] errors;
    public ImportationMonitoring withErrors(BeezUpCommonUserErrorMessage[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("executionId")
    public String executionId;
    public ImportationMonitoring withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateUtcDate")
    public OffsetDateTime lastUpdateUtcDate;
    public ImportationMonitoring withLastUpdateUtcDate(OffsetDateTime lastUpdateUtcDate) {
        this.lastUpdateUtcDate = lastUpdateUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ImportationMonitoringLinks links;
    public ImportationMonitoring withLinks(ImportationMonitoringLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("steps")
    public java.util.Map<String, Boolean> steps;
    public ImportationMonitoring withSteps(java.util.Map<String, Boolean> steps) {
        this.steps = steps;
        return this;
    }
    @JsonProperty("success")
    public Boolean success;
    public ImportationMonitoring withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public ImportationMonitoring withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}