package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServiceActionExecutionParametersInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public DescribeServiceActionExecutionParametersInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonProperty("ProvisionedProductId")
    public String provisionedProductId;
    public DescribeServiceActionExecutionParametersInput withProvisionedProductId(String provisionedProductId) {
        this.provisionedProductId = provisionedProductId;
        return this;
    }
    @JsonProperty("ServiceActionId")
    public String serviceActionId;
    public DescribeServiceActionExecutionParametersInput withServiceActionId(String serviceActionId) {
        this.serviceActionId = serviceActionId;
        return this;
    }
}