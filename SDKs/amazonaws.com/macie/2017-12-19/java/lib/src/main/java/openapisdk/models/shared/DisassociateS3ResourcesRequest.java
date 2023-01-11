package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateS3ResourcesRequest {
    @JsonProperty("associatedS3Resources")
    public S3Resource[] associatedS3Resources;
    public DisassociateS3ResourcesRequest withAssociatedS3Resources(S3Resource[] associatedS3Resources) {
        this.associatedS3Resources = associatedS3Resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberAccountId")
    public String memberAccountId;
    public DisassociateS3ResourcesRequest withMemberAccountId(String memberAccountId) {
        this.memberAccountId = memberAccountId;
        return this;
    }
}