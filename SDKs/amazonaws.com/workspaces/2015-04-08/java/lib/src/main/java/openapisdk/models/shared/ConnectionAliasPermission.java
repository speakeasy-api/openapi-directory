package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectionAliasPermission
 * Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
public class ConnectionAliasPermission {
    @JsonProperty("AllowAssociation")
    public Boolean allowAssociation;
    public ConnectionAliasPermission withAllowAssociation(Boolean allowAssociation) {
        this.allowAssociation = allowAssociation;
        return this;
    }
    @JsonProperty("SharedAccountId")
    public String sharedAccountId;
    public ConnectionAliasPermission withSharedAccountId(String sharedAccountId) {
        this.sharedAccountId = sharedAccountId;
        return this;
    }
}