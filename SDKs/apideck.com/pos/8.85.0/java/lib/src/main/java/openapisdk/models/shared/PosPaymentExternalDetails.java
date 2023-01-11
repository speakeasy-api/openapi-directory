package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PosPaymentExternalDetails
 * Details about an external payment.
**/
public class PosPaymentExternalDetails {
    @JsonProperty("source")
    public String source;
    public PosPaymentExternalDetails withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_fee_amount")
    public Double sourceFeeAmount;
    public PosPaymentExternalDetails withSourceFeeAmount(Double sourceFeeAmount) {
        this.sourceFeeAmount = sourceFeeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_id")
    public String sourceId;
    public PosPaymentExternalDetails withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonProperty("type")
    public PosPaymentExternalDetailsTypeEnum type;
    public PosPaymentExternalDetails withType(PosPaymentExternalDetailsTypeEnum type) {
        this.type = type;
        return this;
    }
}