package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endUtcDate")
    public OffsetDateTime endUtcDate;
    public CreateRuleRequest withEndUtcDate(OffsetDateTime endUtcDate) {
        this.endUtcDate = endUtcDate;
        return this;
    }
    @JsonProperty("optimisationActionName")
    public OptimisationActionNameEnum optimisationActionName;
    public CreateRuleRequest withOptimisationActionName(OptimisationActionNameEnum optimisationActionName) {
        this.optimisationActionName = optimisationActionName;
        return this;
    }
    @JsonProperty("reportFilterId")
    public String reportFilterId;
    public CreateRuleRequest withReportFilterId(String reportFilterId) {
        this.reportFilterId = reportFilterId;
        return this;
    }
    @JsonProperty("ruleName")
    public String ruleName;
    public CreateRuleRequest withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startUtcDate")
    public OffsetDateTime startUtcDate;
    public CreateRuleRequest withStartUtcDate(OffsetDateTime startUtcDate) {
        this.startUtcDate = startUtcDate;
        return this;
    }
}