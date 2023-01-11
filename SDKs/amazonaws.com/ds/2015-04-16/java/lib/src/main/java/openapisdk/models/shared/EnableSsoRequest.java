package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnableSsoRequest
 * Contains the inputs for the <a>EnableSso</a> operation.
**/
public class EnableSsoRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public EnableSsoRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public EnableSsoRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserName")
    public String userName;
    public EnableSsoRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}