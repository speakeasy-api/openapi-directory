package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderExportationsLinks {
    @JsonProperty("self")
    public LinksGetOrderExportationsLink self;
    public OrderExportationsLinks withSelf(LinksGetOrderExportationsLink self) {
        this.self = self;
        return this;
    }
}