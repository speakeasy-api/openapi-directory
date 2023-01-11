package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLinkedRelations200ApplicationJsonRelations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contracttest")
    public GetLinkedRelations200ApplicationJsonRelationsContracttest contracttest;
    public GetLinkedRelations200ApplicationJsonRelations withContracttest(GetLinkedRelations200ApplicationJsonRelationsContracttest contracttest) {
        this.contracttest = contracttest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationtest")
    public GetLinkedRelations200ApplicationJsonRelationsIntegrationtest integrationtest;
    public GetLinkedRelations200ApplicationJsonRelations withIntegrationtest(GetLinkedRelations200ApplicationJsonRelationsIntegrationtest integrationtest) {
        this.integrationtest = integrationtest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public GetLinkedRelations200ApplicationJsonRelationsMock mock;
    public GetLinkedRelations200ApplicationJsonRelations withMock(GetLinkedRelations200ApplicationJsonRelationsMock mock) {
        this.mock = mock;
        return this;
    }
}