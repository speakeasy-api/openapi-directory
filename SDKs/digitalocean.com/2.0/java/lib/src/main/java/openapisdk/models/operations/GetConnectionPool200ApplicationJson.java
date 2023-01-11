package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetConnectionPool200ApplicationJson {
    @JsonProperty("pool")
    public openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 pool;
    public GetConnectionPool200ApplicationJson withPool(openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 pool) {
        this.pool = pool;
        return this;
    }
}