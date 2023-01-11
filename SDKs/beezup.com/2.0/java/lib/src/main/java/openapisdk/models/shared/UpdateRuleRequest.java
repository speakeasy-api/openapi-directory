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
 * UpdateRuleRequest
 * This update will replace the following values.
**/
public class UpdateRuleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endUtcDate")
    public OffsetDateTime endUtcDate;
    public UpdateRuleRequest withEndUtcDate(OffsetDateTime endUtcDate) {
        this.endUtcDate = endUtcDate;
        return this;
    }
    @JsonProperty("ruleName")
    public String ruleName;
    public UpdateRuleRequest withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startUtcDate")
    public OffsetDateTime startUtcDate;
    public UpdateRuleRequest withStartUtcDate(OffsetDateTime startUtcDate) {
        this.startUtcDate = startUtcDate;
        return this;
    }
}