package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionAliasAssociation
 * Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
**/
public class ConnectionAliasAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatedAccountId")
    public String associatedAccountId;
    public ConnectionAliasAssociation withAssociatedAccountId(String associatedAccountId) {
        this.associatedAccountId = associatedAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationStatus")
    public AssociationStatusEnum associationStatus;
    public ConnectionAliasAssociation withAssociationStatus(AssociationStatusEnum associationStatus) {
        this.associationStatus = associationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionIdentifier")
    public String connectionIdentifier;
    public ConnectionAliasAssociation withConnectionIdentifier(String connectionIdentifier) {
        this.connectionIdentifier = connectionIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceId")
    public String resourceId;
    public ConnectionAliasAssociation withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}