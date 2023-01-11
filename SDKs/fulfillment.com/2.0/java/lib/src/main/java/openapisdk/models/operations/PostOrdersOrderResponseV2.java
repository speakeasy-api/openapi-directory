package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PostOrdersOrderResponseV2 {
    @JsonProperty("currentStatus")
    public PostOrdersOrderResponseV2StatusEventV2 currentStatus;
    public PostOrdersOrderResponseV2 withCurrentStatus(PostOrdersOrderResponseV2StatusEventV2 currentStatus) {
        this.currentStatus = currentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("departDate")
    public OffsetDateTime departDate;
    public PostOrdersOrderResponseV2 withDepartDate(OffsetDateTime departDate) {
        this.departDate = departDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dispatchDate")
    public OffsetDateTime dispatchDate;
    public PostOrdersOrderResponseV2 withDispatchDate(OffsetDateTime dispatchDate) {
        this.dispatchDate = dispatchDate;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PostOrdersOrderResponseV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("merchant")
    public PostOrdersOrderResponseV2MerchantV2 merchant;
    public PostOrdersOrderResponseV2 withMerchant(PostOrdersOrderResponseV2MerchantV2 merchant) {
        this.merchant = merchant;
        return this;
    }
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public PostOrdersOrderResponseV2 withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonProperty("merchantShippingMethod")
    public String merchantShippingMethod;
    public PostOrdersOrderResponseV2 withMerchantShippingMethod(String merchantShippingMethod) {
        this.merchantShippingMethod = merchantShippingMethod;
        return this;
    }
    @JsonProperty("originalConsignee")
    public PostOrdersOrderResponseV2ConsigneeV2 originalConsignee;
    public PostOrdersOrderResponseV2 withOriginalConsignee(PostOrdersOrderResponseV2ConsigneeV2 originalConsignee) {
        this.originalConsignee = originalConsignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentOrder")
    public PostOrdersOrderResponseV2ParentOrder parentOrder;
    public PostOrdersOrderResponseV2 withParentOrder(PostOrdersOrderResponseV2ParentOrder parentOrder) {
        this.parentOrder = parentOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderNum")
    public String purchaseOrderNum;
    public PostOrdersOrderResponseV2 withPurchaseOrderNum(String purchaseOrderNum) {
        this.purchaseOrderNum = purchaseOrderNum;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("recordedOn")
    public OffsetDateTime recordedOn;
    public PostOrdersOrderResponseV2 withRecordedOn(OffsetDateTime recordedOn) {
        this.recordedOn = recordedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingNumbers")
    public PostOrdersOrderResponseV2TrackingNumberV2[] trackingNumbers;
    public PostOrdersOrderResponseV2 withTrackingNumbers(PostOrdersOrderResponseV2TrackingNumberV2[] trackingNumbers) {
        this.trackingNumbers = trackingNumbers;
        return this;
    }
    @JsonProperty("validatedConsignee")
    public openapisdk.models.shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee validatedConsignee;
    public PostOrdersOrderResponseV2 withValidatedConsignee(openapisdk.models.shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee validatedConsignee) {
        this.validatedConsignee = validatedConsignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse")
    public PostOrdersOrderResponseV2WarehouseV2 warehouse;
    public PostOrdersOrderResponseV2 withWarehouse(PostOrdersOrderResponseV2WarehouseV2 warehouse) {
        this.warehouse = warehouse;
        return this;
    }
}