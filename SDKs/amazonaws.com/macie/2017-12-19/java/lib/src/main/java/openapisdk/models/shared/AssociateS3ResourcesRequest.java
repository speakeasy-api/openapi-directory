package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateS3ResourcesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberAccountId")
    public String memberAccountId;
    public AssociateS3ResourcesRequest withMemberAccountId(String memberAccountId) {
        this.memberAccountId = memberAccountId;
        return this;
    }
    @JsonProperty("s3Resources")
    public S3ResourceClassification[] s3Resources;
    public AssociateS3ResourcesRequest withS3Resources(S3ResourceClassification[] s3Resources) {
        this.s3Resources = s3Resources;
        return this;
    }
}