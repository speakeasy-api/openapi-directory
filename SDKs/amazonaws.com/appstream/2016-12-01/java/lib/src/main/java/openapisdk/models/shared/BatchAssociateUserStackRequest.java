package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchAssociateUserStackRequest {
    @JsonProperty("UserStackAssociations")
    public UserStackAssociation[] userStackAssociations;
    public BatchAssociateUserStackRequest withUserStackAssociations(UserStackAssociation[] userStackAssociations) {
        this.userStackAssociations = userStackAssociations;
        return this;
    }
}