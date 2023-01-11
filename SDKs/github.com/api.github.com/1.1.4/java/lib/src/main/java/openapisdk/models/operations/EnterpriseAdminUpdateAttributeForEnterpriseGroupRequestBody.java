package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody {
    @JsonProperty("Operations")
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations[] operations;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody withOperations(EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations[] operations) {
        this.operations = operations;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBody withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
}