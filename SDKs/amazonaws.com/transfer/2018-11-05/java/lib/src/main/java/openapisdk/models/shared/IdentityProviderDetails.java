package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityProviderDetails
 * Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication.
**/
public class IdentityProviderDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryId")
    public String directoryId;
    public IdentityProviderDetails withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InvocationRole")
    public String invocationRole;
    public IdentityProviderDetails withInvocationRole(String invocationRole) {
        this.invocationRole = invocationRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public IdentityProviderDetails withUrl(String url) {
        this.url = url;
        return this;
    }
}