package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetInvoiceByUuid200ApplicationJsonMeta
 * Information about the response itself.
**/
public class GetInvoiceByUuid200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public GetInvoiceByUuid200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}