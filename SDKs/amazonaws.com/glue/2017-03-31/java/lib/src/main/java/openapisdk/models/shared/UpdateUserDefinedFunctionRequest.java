package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUserDefinedFunctionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public UpdateUserDefinedFunctionRequest withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("DatabaseName")
    public String databaseName;
    public UpdateUserDefinedFunctionRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonProperty("FunctionInput")
    public UserDefinedFunctionInput functionInput;
    public UpdateUserDefinedFunctionRequest withFunctionInput(UserDefinedFunctionInput functionInput) {
        this.functionInput = functionInput;
        return this;
    }
    @JsonProperty("FunctionName")
    public String functionName;
    public UpdateUserDefinedFunctionRequest withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
}