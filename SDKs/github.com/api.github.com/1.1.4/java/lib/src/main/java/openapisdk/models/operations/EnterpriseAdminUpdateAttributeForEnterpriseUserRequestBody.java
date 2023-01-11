package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody {
    @JsonProperty("Operations")
    public java.util.Map<String, Object>[] operations;
    public EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody withOperations(java.util.Map<String, Object>[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
}