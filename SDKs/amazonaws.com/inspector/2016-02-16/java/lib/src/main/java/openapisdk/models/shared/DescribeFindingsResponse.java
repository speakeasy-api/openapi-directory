package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFindingsResponse {
    @JsonProperty("failedItems")
    public java.util.Map<String, FailedItemDetails> failedItems;
    public DescribeFindingsResponse withFailedItems(java.util.Map<String, FailedItemDetails> failedItems) {
        this.failedItems = failedItems;
        return this;
    }
    @JsonProperty("findings")
    public Finding[] findings;
    public DescribeFindingsResponse withFindings(Finding[] findings) {
        this.findings = findings;
        return this;
    }
}