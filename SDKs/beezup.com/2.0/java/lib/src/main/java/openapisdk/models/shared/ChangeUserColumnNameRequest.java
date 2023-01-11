package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChangeUserColumnNameRequest
 * The message request for the change user column name
**/
public class ChangeUserColumnNameRequest {
    @JsonProperty("userColumName")
    public String userColumName;
    public ChangeUserColumnNameRequest withUserColumName(String userColumName) {
        this.userColumName = userColumName;
        return this;
    }
}