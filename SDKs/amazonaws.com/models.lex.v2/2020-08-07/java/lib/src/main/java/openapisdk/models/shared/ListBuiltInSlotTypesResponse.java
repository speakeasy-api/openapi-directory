package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBuiltInSlotTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builtInSlotTypeSummaries")
    public BuiltInSlotTypeSummary[] builtInSlotTypeSummaries;
    public ListBuiltInSlotTypesResponse withBuiltInSlotTypeSummaries(BuiltInSlotTypeSummary[] builtInSlotTypeSummaries) {
        this.builtInSlotTypeSummaries = builtInSlotTypeSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localeId")
    public String localeId;
    public ListBuiltInSlotTypesResponse withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBuiltInSlotTypesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}