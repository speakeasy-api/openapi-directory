package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateNodeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeAssociationStatusToken")
    public String nodeAssociationStatusToken;
    public AssociateNodeResponse withNodeAssociationStatusToken(String nodeAssociationStatusToken) {
        this.nodeAssociationStatusToken = nodeAssociationStatusToken;
        return this;
    }
}