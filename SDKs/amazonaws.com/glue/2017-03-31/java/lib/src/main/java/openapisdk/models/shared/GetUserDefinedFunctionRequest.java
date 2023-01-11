package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserDefinedFunctionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public GetUserDefinedFunctionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public GetUserDefinedFunctionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("FunctionName")
    public String functionName;
    public GetUserDefinedFunctionRequest withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}