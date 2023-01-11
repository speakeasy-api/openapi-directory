package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionPools200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pools")
    public ListConnectionPools200ApplicationJsonPools[] pools;
    public ListConnectionPools200ApplicationJson withPools(ListConnectionPools200ApplicationJsonPools[] pools) {
        this.pools = pools;
        return this;
    }
}