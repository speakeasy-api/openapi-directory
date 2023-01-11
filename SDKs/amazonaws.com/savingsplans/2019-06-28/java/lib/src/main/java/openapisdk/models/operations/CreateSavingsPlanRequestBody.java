package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateSavingsPlanRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateSavingsPlanRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("commitment")
    public String commitment;
    public CreateSavingsPlanRequestBody withCommitment(String commitment) {
        this.commitment = commitment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("purchaseTime")
    public OffsetDateTime purchaseTime;
    public CreateSavingsPlanRequestBody withPurchaseTime(OffsetDateTime purchaseTime) {
        this.purchaseTime = purchaseTime;
        return this;
    }
    @JsonProperty("savingsPlanOfferingId")
    public String savingsPlanOfferingId;
    public CreateSavingsPlanRequestBody withSavingsPlanOfferingId(String savingsPlanOfferingId) {
        this.savingsPlanOfferingId = savingsPlanOfferingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateSavingsPlanRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upfrontPaymentAmount")
    public String upfrontPaymentAmount;
    public CreateSavingsPlanRequestBody withUpfrontPaymentAmount(String upfrontPaymentAmount) {
        this.upfrontPaymentAmount = upfrontPaymentAmount;
        return this;
    }
}