package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OrderDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public AssetIdFromOrder[] assets;
    public OrderDetail withAssets(AssetIdFromOrder[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_client")
    public String endClient;
    public OrderDetail withEndClient(String endClient) {
        this.endClient = endClient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_number")
    public String invoiceNumber;
    public OrderDetail withInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public OrderNotes notes;
    public OrderDetail withNotes(OrderNotes notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("order_date")
    public OffsetDateTime orderDate;
    public OrderDetail withOrderDate(OffsetDateTime orderDate) {
        this.orderDate = orderDate;
        return this;
    }
}