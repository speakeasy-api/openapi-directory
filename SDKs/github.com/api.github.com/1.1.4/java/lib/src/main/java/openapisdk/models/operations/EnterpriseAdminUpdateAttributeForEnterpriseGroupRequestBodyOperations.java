package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations {
    @JsonProperty("op")
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum op;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations withOp(EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperationsOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Object value;
    public EnterpriseAdminUpdateAttributeForEnterpriseGroupRequestBodyOperations withValue(Object value) {
        this.value = value;
        return this;
    }
}