package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListBillingHistory200ApplicationJsonBillingHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public String amount;
    public ListBillingHistory200ApplicationJsonBillingHistory withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public ListBillingHistory200ApplicationJsonBillingHistory withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ListBillingHistory200ApplicationJsonBillingHistory withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_id")
    public String invoiceId;
    public ListBillingHistory200ApplicationJsonBillingHistory withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoice_uuid")
    public String invoiceUuid;
    public ListBillingHistory200ApplicationJsonBillingHistory withInvoiceUuid(String invoiceUuid) {
        this.invoiceUuid = invoiceUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum type;
    public ListBillingHistory200ApplicationJsonBillingHistory withType(ListBillingHistory200ApplicationJsonBillingHistoryTypeEnum type) {
        this.type = type;
        return this;
    }
}