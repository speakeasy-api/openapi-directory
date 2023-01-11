package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsDynamoDbTableBillingModeSummary
 * Provides information about the billing for read/write capacity on the table.
**/
public class AwsDynamoDbTableBillingModeSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillingMode")
    public String billingMode;
    public AwsDynamoDbTableBillingModeSummary withBillingMode(String billingMode) {
        this.billingMode = billingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastUpdateToPayPerRequestDateTime")
    public String lastUpdateToPayPerRequestDateTime;
    public AwsDynamoDbTableBillingModeSummary withLastUpdateToPayPerRequestDateTime(String lastUpdateToPayPerRequestDateTime) {
        this.lastUpdateToPayPerRequestDateTime = lastUpdateToPayPerRequestDateTime;
        return this;
    }
}