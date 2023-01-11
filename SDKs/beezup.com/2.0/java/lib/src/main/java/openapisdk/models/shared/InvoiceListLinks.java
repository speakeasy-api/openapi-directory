package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InvoiceListLinks {
    @JsonProperty("self")
    public LinksGetInvoicesLink self;
    public InvoiceListLinks withSelf(LinksGetInvoicesLink self) {
        this.self = self;
        return this;
    }
}