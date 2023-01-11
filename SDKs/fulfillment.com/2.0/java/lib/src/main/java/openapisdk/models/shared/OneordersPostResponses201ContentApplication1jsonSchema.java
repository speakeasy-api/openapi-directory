package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OneordersPostResponses201ContentApplication1jsonSchema {
    @JsonProperty("currentStatus")
    public OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 currentStatus;
    public OneordersPostResponses201ContentApplication1jsonSchema withCurrentStatus(OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 currentStatus) {
        this.currentStatus = currentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("departDate")
    public OffsetDateTime departDate;
    public OneordersPostResponses201ContentApplication1jsonSchema withDepartDate(OffsetDateTime departDate) {
        this.departDate = departDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dispatchDate")
    public OffsetDateTime dispatchDate;
    public OneordersPostResponses201ContentApplication1jsonSchema withDispatchDate(OffsetDateTime dispatchDate) {
        this.dispatchDate = dispatchDate;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public OneordersPostResponses201ContentApplication1jsonSchema withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("merchant")
    public OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 merchant;
    public OneordersPostResponses201ContentApplication1jsonSchema withMerchant(OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 merchant) {
        this.merchant = merchant;
        return this;
    }
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public OneordersPostResponses201ContentApplication1jsonSchema withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonProperty("merchantShippingMethod")
    public String merchantShippingMethod;
    public OneordersPostResponses201ContentApplication1jsonSchema withMerchantShippingMethod(String merchantShippingMethod) {
        this.merchantShippingMethod = merchantShippingMethod;
        return this;
    }
    @JsonProperty("originalConsignee")
    public OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 originalConsignee;
    public OneordersPostResponses201ContentApplication1jsonSchema withOriginalConsignee(OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 originalConsignee) {
        this.originalConsignee = originalConsignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentOrder")
    public OneordersPostResponses201ContentApplication1jsonSchemaParentOrder parentOrder;
    public OneordersPostResponses201ContentApplication1jsonSchema withParentOrder(OneordersPostResponses201ContentApplication1jsonSchemaParentOrder parentOrder) {
        this.parentOrder = parentOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchaseOrderNum")
    public String purchaseOrderNum;
    public OneordersPostResponses201ContentApplication1jsonSchema withPurchaseOrderNum(String purchaseOrderNum) {
        this.purchaseOrderNum = purchaseOrderNum;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("recordedOn")
    public OffsetDateTime recordedOn;
    public OneordersPostResponses201ContentApplication1jsonSchema withRecordedOn(OffsetDateTime recordedOn) {
        this.recordedOn = recordedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingNumbers")
    public OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2[] trackingNumbers;
    public OneordersPostResponses201ContentApplication1jsonSchema withTrackingNumbers(OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2[] trackingNumbers) {
        this.trackingNumbers = trackingNumbers;
        return this;
    }
    @JsonProperty("validatedConsignee")
    public OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee validatedConsignee;
    public OneordersPostResponses201ContentApplication1jsonSchema withValidatedConsignee(OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee validatedConsignee) {
        this.validatedConsignee = validatedConsignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse")
    public OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2 warehouse;
    public OneordersPostResponses201ContentApplication1jsonSchema withWarehouse(OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2 warehouse) {
        this.warehouse = warehouse;
        return this;
    }
}