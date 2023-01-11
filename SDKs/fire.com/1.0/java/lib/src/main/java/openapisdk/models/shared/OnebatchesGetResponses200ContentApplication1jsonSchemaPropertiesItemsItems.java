package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountAfterCharges")
    public Long amountAfterCharges;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withAmountAfterCharges(Long amountAfterCharges) {
        this.amountAfterCharges = amountAfterCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchItemUuid")
    public String batchItemUuid;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withBatchItemUuid(String batchItemUuid) {
        this.batchItemUuid = batchItemUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCreated")
    public OffsetDateTime dateCreated;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeAmount")
    public Long feeAmount;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withFeeAmount(Long feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icanFrom")
    public Long icanFrom;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withIcanFrom(Long icanFrom) {
        this.icanFrom = icanFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icanTo")
    public Long icanTo;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withIcanTo(Long icanTo) {
        this.icanTo = icanTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref")
    public String ref;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refId")
    public Long refId;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withRefId(Long refId) {
        this.refId = refId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult result;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withResult(OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsResult result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum status;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withStatus(OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItemsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Long taxAmount;
    public OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems withTaxAmount(Long taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
}