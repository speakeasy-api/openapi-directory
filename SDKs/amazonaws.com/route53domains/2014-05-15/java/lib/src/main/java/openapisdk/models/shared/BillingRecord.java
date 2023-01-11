package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BillingRecord
 * Information for one billing record.
**/
public class BillingRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("BillDate")
    public OffsetDateTime billDate;
    public BillingRecord withBillDate(OffsetDateTime billDate) {
        this.billDate = billDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public BillingRecord withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvoiceId")
    public String invoiceId;
    public BillingRecord withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Operation")
    public OperationTypeEnum operation;
    public BillingRecord withOperation(OperationTypeEnum operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public Double price;
    public BillingRecord withPrice(Double price) {
        this.price = price;
        return this;
    }
}