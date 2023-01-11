package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimUpdateAttributeForUserRequestBody {
    @JsonProperty("Operations")
    public ScimUpdateAttributeForUserRequestBodyOperations[] operations;
    public ScimUpdateAttributeForUserRequestBody withOperations(ScimUpdateAttributeForUserRequestBodyOperations[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemas")
    public String[] schemas;
    public ScimUpdateAttributeForUserRequestBody withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
}