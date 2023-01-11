package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChangeCustomColumnExpressionRequest
 * The request message to change the custom column expression
**/
public class ChangeCustomColumnExpressionRequest {
    @JsonProperty("encryptedBlocklyExpression")
    public String encryptedBlocklyExpression;
    public ChangeCustomColumnExpressionRequest withEncryptedBlocklyExpression(String encryptedBlocklyExpression) {
        this.encryptedBlocklyExpression = encryptedBlocklyExpression;
        return this;
    }
    @JsonProperty("encryptedExpression")
    public String encryptedExpression;
    public ChangeCustomColumnExpressionRequest withEncryptedExpression(String encryptedExpression) {
        this.encryptedExpression = encryptedExpression;
        return this;
    }
}