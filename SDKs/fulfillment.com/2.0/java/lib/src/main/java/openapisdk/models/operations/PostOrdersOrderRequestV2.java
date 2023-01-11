package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrdersOrderRequestV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrator")
    public PostOrdersOrderRequestV2IntegratorEnum integrator;
    public PostOrdersOrderRequestV2 withIntegrator(PostOrdersOrderRequestV2IntegratorEnum integrator) {
        this.integrator = integrator;
        return this;
    }
    @JsonProperty("items")
    public PostOrdersOrderRequestV2Items[] items;
    public PostOrdersOrderRequestV2 withItems(PostOrdersOrderRequestV2Items[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public Long merchantId;
    public PostOrdersOrderRequestV2 withMerchantId(Long merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public PostOrdersOrderRequestV2 withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public PostOrdersOrderRequestV2 withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("recipient")
    public PostOrdersOrderRequestV2ConsigneeNewV2 recipient;
    public PostOrdersOrderRequestV2 withRecipient(PostOrdersOrderRequestV2ConsigneeNewV2 recipient) {
        this.recipient = recipient;
        return this;
    }
    @JsonProperty("shippingMethod")
    public String shippingMethod;
    public PostOrdersOrderRequestV2 withShippingMethod(String shippingMethod) {
        this.shippingMethod = shippingMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse")
    public PostOrdersOrderRequestV2Warehouse warehouse;
    public PostOrdersOrderRequestV2 withWarehouse(PostOrdersOrderRequestV2Warehouse warehouse) {
        this.warehouse = warehouse;
        return this;
    }
}