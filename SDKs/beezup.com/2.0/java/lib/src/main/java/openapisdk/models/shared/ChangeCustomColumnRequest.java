package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChangeCustomColumnRequest
 * The message request to change a custom column expression an user name
**/
public class ChangeCustomColumnRequest {
    @JsonProperty("encryptedBlocklyExpression")
    public String encryptedBlocklyExpression;
    public ChangeCustomColumnRequest withEncryptedBlocklyExpression(String encryptedBlocklyExpression) {
        this.encryptedBlocklyExpression = encryptedBlocklyExpression;
        return this;
    }
    @JsonProperty("encryptedExpression")
    public String encryptedExpression;
    public ChangeCustomColumnRequest withEncryptedExpression(String encryptedExpression) {
        this.encryptedExpression = encryptedExpression;
        return this;
    }
    @JsonProperty("userColumName")
    public String userColumName;
    public ChangeCustomColumnRequest withUserColumName(String userColumName) {
        this.userColumName = userColumName;
        return this;
    }
}