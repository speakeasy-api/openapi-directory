package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDisassociateUserStackRequest {
    @JsonProperty("UserStackAssociations")
    public UserStackAssociation[] userStackAssociations;
    public BatchDisassociateUserStackRequest withUserStackAssociations(UserStackAssociation[] userStackAssociations) {
        this.userStackAssociations = userStackAssociations;
        return this;
    }
}