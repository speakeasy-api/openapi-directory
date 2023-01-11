package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnalyticsProductColumnFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatorName")
    public String operatorName;
    public AnalyticsProductColumnFilter withOperatorName(String operatorName) {
        this.operatorName = operatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public AnalyticsProductColumnFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}