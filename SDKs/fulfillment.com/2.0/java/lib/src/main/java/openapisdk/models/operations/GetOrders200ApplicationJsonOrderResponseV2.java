package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetOrders200ApplicationJsonOrderResponseV2
 * Requires hydrate to be set in the request and the corresponding node will be filled.
**/
public class GetOrders200ApplicationJsonOrderResponseV2 {
    @JsonProperty("currentStatus")
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2 currentStatus;
    public GetOrders200ApplicationJsonOrderResponseV2 withCurrentStatus(GetOrders200ApplicationJsonOrderResponseV2StatusEventV2 currentStatus) {
        this.currentStatus = currentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("departDate")
    public OffsetDateTime departDate;
    public GetOrders200ApplicationJsonOrderResponseV2 withDepartDate(OffsetDateTime departDate) {
        this.departDate = departDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dispatchDate")
    public OffsetDateTime dispatchDate;
    public GetOrders200ApplicationJsonOrderResponseV2 withDispatchDate(OffsetDateTime dispatchDate) {
        this.dispatchDate = dispatchDate;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public GetOrders200ApplicationJsonOrderResponseV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrator")
    public String integrator;
    public GetOrders200ApplicationJsonOrderResponseV2 withIntegrator(String integrator) {
        this.integrator = integrator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItems")
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2[] lineItems;
    public GetOrders200ApplicationJsonOrderResponseV2 withLineItems(GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonProperty("merchant")
    public GetOrders200ApplicationJsonOrderResponseV2MerchantV2 merchant;
    public GetOrders200ApplicationJsonOrderResponseV2 withMerchant(GetOrders200ApplicationJsonOrderResponseV2MerchantV2 merchant) {
        this.merchant = merchant;
        return this;
    }
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public GetOrders200ApplicationJsonOrderResponseV2 withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonProperty("merchantShippingMethod")
    public String merchantShippingMethod;
    public GetOrders200ApplicationJsonOrderResponseV2 withMerchantShippingMethod(String merchantShippingMethod) {
        this.merchantShippingMethod = merchantShippingMethod;
        return this;
    }
    @JsonProperty("originalConsignee")
    public GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2 originalConsignee;
    public GetOrders200ApplicationJsonOrderResponseV2 withOriginalConsignee(GetOrders200ApplicationJsonOrderResponseV2ConsigneeV2 originalConsignee) {
        this.originalConsignee = originalConsignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentOrder")
    public GetOrders200ApplicationJsonOrderResponseV2ParentOrder parentOrder;
    public GetOrders200ApplicationJsonOrderResponseV2 withParentOrder(GetOrders200ApplicationJsonOrderResponseV2ParentOrder parentOrder) {
        this.parentOrder = parentOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderNum")
    public String purchaseOrderNum;
    public GetOrders200ApplicationJsonOrderResponseV2 withPurchaseOrderNum(String purchaseOrderNum) {
        this.purchaseOrderNum = purchaseOrderNum;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("recordedOn")
    public OffsetDateTime recordedOn;
    public GetOrders200ApplicationJsonOrderResponseV2 withRecordedOn(OffsetDateTime recordedOn) {
        this.recordedOn = recordedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingNumbers")
    public GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers[] trackingNumbers;
    public GetOrders200ApplicationJsonOrderResponseV2 withTrackingNumbers(GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers[] trackingNumbers) {
        this.trackingNumbers = trackingNumbers;
        return this;
    }
    @JsonProperty("validatedConsignee")
    public openapisdk.models.shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee validatedConsignee;
    public GetOrders200ApplicationJsonOrderResponseV2 withValidatedConsignee(openapisdk.models.shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee validatedConsignee) {
        this.validatedConsignee = validatedConsignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse")
    public GetOrders200ApplicationJsonOrderResponseV2WarehouseV2 warehouse;
    public GetOrders200ApplicationJsonOrderResponseV2 withWarehouse(GetOrders200ApplicationJsonOrderResponseV2WarehouseV2 warehouse) {
        this.warehouse = warehouse;
        return this;
    }
}