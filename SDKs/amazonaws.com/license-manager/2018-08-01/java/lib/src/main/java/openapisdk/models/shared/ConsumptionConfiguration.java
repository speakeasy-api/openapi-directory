package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConsumptionConfiguration
 * Details about a consumption configuration.
**/
public class ConsumptionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BorrowConfiguration")
    public BorrowConfiguration borrowConfiguration;
    public ConsumptionConfiguration withBorrowConfiguration(BorrowConfiguration borrowConfiguration) {
        this.borrowConfiguration = borrowConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionalConfiguration")
    public ProvisionalConfiguration provisionalConfiguration;
    public ConsumptionConfiguration withProvisionalConfiguration(ProvisionalConfiguration provisionalConfiguration) {
        this.provisionalConfiguration = provisionalConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RenewType")
    public RenewTypeEnum renewType;
    public ConsumptionConfiguration withRenewType(RenewTypeEnum renewType) {
        this.renewType = renewType;
        return this;
    }
}