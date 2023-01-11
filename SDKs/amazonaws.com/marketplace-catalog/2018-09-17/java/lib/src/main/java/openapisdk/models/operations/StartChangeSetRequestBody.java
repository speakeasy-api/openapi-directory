package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartChangeSetRequestBody {
    @JsonProperty("Catalog")
    public String catalog;
    public StartChangeSetRequestBody withCatalog(String catalog) {
        this.catalog = catalog;
        return this;
    }
    @JsonProperty("ChangeSet")
    public openapisdk.models.shared.Change[] changeSet;
    public StartChangeSetRequestBody withChangeSet(openapisdk.models.shared.Change[] changeSet) {
        this.changeSet = changeSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeSetName")
    public String changeSetName;
    public StartChangeSetRequestBody withChangeSetName(String changeSetName) {
        this.changeSetName = changeSetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientRequestToken")
    public String clientRequestToken;
    public StartChangeSetRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
}