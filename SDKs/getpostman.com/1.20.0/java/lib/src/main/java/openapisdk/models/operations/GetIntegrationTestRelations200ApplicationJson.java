package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetIntegrationTestRelations200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationtest")
    public GetIntegrationTestRelations200ApplicationJsonIntegrationtest[] integrationtest;
    public GetIntegrationTestRelations200ApplicationJson withIntegrationtest(GetIntegrationTestRelations200ApplicationJsonIntegrationtest[] integrationtest) {
        this.integrationtest = integrationtest;
        return this;
    }
}