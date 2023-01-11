package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateCustomColumnRequest
 * The request message to create a custom column
**/
public class CreateCustomColumnRequest {
    @JsonProperty("displayGroupName")
    public String displayGroupName;
    public CreateCustomColumnRequest withDisplayGroupName(String displayGroupName) {
        this.displayGroupName = displayGroupName;
        return this;
    }
    @JsonProperty("encryptedBlocklyExpression")
    public String encryptedBlocklyExpression;
    public CreateCustomColumnRequest withEncryptedBlocklyExpression(String encryptedBlocklyExpression) {
        this.encryptedBlocklyExpression = encryptedBlocklyExpression;
        return this;
    }
    @JsonProperty("encryptedExpression")
    public String encryptedExpression;
    public CreateCustomColumnRequest withEncryptedExpression(String encryptedExpression) {
        this.encryptedExpression = encryptedExpression;
        return this;
    }
    @JsonProperty("userColumnName")
    public String userColumnName;
    public CreateCustomColumnRequest withUserColumnName(String userColumnName) {
        this.userColumnName = userColumnName;
        return this;
    }
}