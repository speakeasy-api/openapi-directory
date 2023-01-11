package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DisableSsoRequest
 * Contains the inputs for the <a>DisableSso</a> operation.
**/
public class DisableSsoRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DisableSsoRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;
    public DisableSsoRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserName")
    public String userName;
    public DisableSsoRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}