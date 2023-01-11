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
 * ImportationReporting
 * The catalog importation reporting
**/
public class ImportationReporting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoImported")
    public Boolean autoImported;
    public ImportationReporting withAutoImported(Boolean autoImported) {
        this.autoImported = autoImported;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("beginUtcDate")
    public OffsetDateTime beginUtcDate;
    public ImportationReporting withBeginUtcDate(OffsetDateTime beginUtcDate) {
        this.beginUtcDate = beginUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endUtcDate")
    public OffsetDateTime endUtcDate;
    public ImportationReporting withEndUtcDate(OffsetDateTime endUtcDate) {
        this.endUtcDate = endUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public BeezUpCommonUserErrorMessage[] errors;
    public ImportationReporting withErrors(BeezUpCommonUserErrorMessage[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("executionId")
    public String executionId;
    public ImportationReporting withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputConfigurationUrl")
    public String inputConfigurationUrl;
    public ImportationReporting withInputConfigurationUrl(String inputConfigurationUrl) {
        this.inputConfigurationUrl = inputConfigurationUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateUtcDate")
    public OffsetDateTime lastUpdateUtcDate;
    public ImportationReporting withLastUpdateUtcDate(OffsetDateTime lastUpdateUtcDate) {
        this.lastUpdateUtcDate = lastUpdateUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ImportationReportingLinks links;
    public ImportationReporting withLinks(ImportationReportingLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepName")
    public String stepName;
    public ImportationReporting withStepName(String stepName) {
        this.stepName = stepName;
        return this;
    }
    @JsonProperty("steps")
    public java.util.Map<String, Boolean> steps;
    public ImportationReporting withSteps(java.util.Map<String, Boolean> steps) {
        this.steps = steps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ImportationReporting withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalProductCount")
    public Integer totalProductCount;
    public ImportationReporting withTotalProductCount(Integer totalProductCount) {
        this.totalProductCount = totalProductCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalProductErrorCount")
    public Integer totalProductErrorCount;
    public ImportationReporting withTotalProductErrorCount(Integer totalProductErrorCount) {
        this.totalProductErrorCount = totalProductErrorCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalProductSuccessCount")
    public Integer totalProductSuccessCount;
    public ImportationReporting withTotalProductSuccessCount(Integer totalProductSuccessCount) {
        this.totalProductSuccessCount = totalProductSuccessCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public ImportationReporting withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}