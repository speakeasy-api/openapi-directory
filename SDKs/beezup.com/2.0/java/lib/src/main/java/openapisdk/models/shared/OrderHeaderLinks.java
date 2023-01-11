package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrderHeaderLinks {
    @JsonProperty("self")
    public LinksGetOrderLink self;
    public OrderHeaderLinks withSelf(LinksGetOrderLink self) {
        this.self = self;
        return this;
    }
}