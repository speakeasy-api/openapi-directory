package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ComputeExpressionRequest
 * The request message to compute an expression based on the provided product values
**/
public class ComputeExpressionRequest {
    @JsonProperty("encryptedExpression")
    public String encryptedExpression;
    public ComputeExpressionRequest withEncryptedExpression(String encryptedExpression) {
        this.encryptedExpression = encryptedExpression;
        return this;
    }
    @JsonProperty("productValues")
    public java.util.Map<String, String> productValues;
    public ComputeExpressionRequest withProductValues(java.util.Map<String, String> productValues) {
        this.productValues = productValues;
        return this;
    }
}