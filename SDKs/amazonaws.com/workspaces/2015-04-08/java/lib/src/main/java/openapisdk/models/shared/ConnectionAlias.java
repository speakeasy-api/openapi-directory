package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionAlias
 * Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
public class ConnectionAlias {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AliasId")
    public String aliasId;
    public ConnectionAlias withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Associations")
    public ConnectionAliasAssociation[] associations;
    public ConnectionAlias withAssociations(ConnectionAliasAssociation[] associations) {
        this.associations = associations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionString")
    public String connectionString;
    public ConnectionAlias withConnectionString(String connectionString) {
        this.connectionString = connectionString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnerAccountId")
    public String ownerAccountId;
    public ConnectionAlias withOwnerAccountId(String ownerAccountId) {
        this.ownerAccountId = ownerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public ConnectionAliasStateEnum state;
    public ConnectionAlias withState(ConnectionAliasStateEnum state) {
        this.state = state;
        return this;
    }
}