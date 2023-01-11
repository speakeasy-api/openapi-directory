package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetBatchesBatchItemsBatchItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public GetBatchesBatchItemsBatchItem withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountAfterCharges")
    public Long amountAfterCharges;
    public GetBatchesBatchItemsBatchItem withAmountAfterCharges(Long amountAfterCharges) {
        this.amountAfterCharges = amountAfterCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchItemUuid")
    public String batchItemUuid;
    public GetBatchesBatchItemsBatchItem withBatchItemUuid(String batchItemUuid) {
        this.batchItemUuid = batchItemUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCreated")
    public OffsetDateTime dateCreated;
    public GetBatchesBatchItemsBatchItem withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeAmount")
    public Long feeAmount;
    public GetBatchesBatchItemsBatchItem withFeeAmount(Long feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icanFrom")
    public Long icanFrom;
    public GetBatchesBatchItemsBatchItem withIcanFrom(Long icanFrom) {
        this.icanFrom = icanFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icanTo")
    public Long icanTo;
    public GetBatchesBatchItemsBatchItem withIcanTo(Long icanTo) {
        this.icanTo = icanTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public GetBatchesBatchItemsBatchItem withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ref")
    public String ref;
    public GetBatchesBatchItemsBatchItem withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refId")
    public Long refId;
    public GetBatchesBatchItemsBatchItem withRefId(Long refId) {
        this.refId = refId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public GetBatchesBatchItemsBatchItemResult result;
    public GetBatchesBatchItemsBatchItem withResult(GetBatchesBatchItemsBatchItemResult result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetBatchesBatchItemsBatchItemStatusEnum status;
    public GetBatchesBatchItemsBatchItem withStatus(GetBatchesBatchItemsBatchItemStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxAmount")
    public Long taxAmount;
    public GetBatchesBatchItemsBatchItem withTaxAmount(Long taxAmount) {
        this.taxAmount = taxAmount;
        return this;
    }
}