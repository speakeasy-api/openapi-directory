package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OfferingStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("effectiveOn")
    public OffsetDateTime effectiveOn;
    public OfferingStatus withEffectiveOn(OffsetDateTime effectiveOn) {
        this.effectiveOn = effectiveOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offering")
    public Offering offering;
    public OfferingStatus withOffering(Offering offering) {
        this.offering = offering;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public OfferingStatus withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OfferingTransactionTypeEnum type;
    public OfferingStatus withType(OfferingTransactionTypeEnum type) {
        this.type = type;
        return this;
    }
}