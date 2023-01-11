package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateUserDefinedFunctionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public CreateUserDefinedFunctionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public CreateUserDefinedFunctionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("FunctionInput")
    public UserDefinedFunctionInput functionInput;
    public CreateUserDefinedFunctionRequest withFunctionInput(UserDefinedFunctionInput functionInput) {
        this.functionInput = functionInput;
        return this;
    }
}