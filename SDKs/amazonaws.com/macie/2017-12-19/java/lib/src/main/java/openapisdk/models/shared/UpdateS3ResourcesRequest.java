package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateS3ResourcesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberAccountId")
    public String memberAccountId;
    public UpdateS3ResourcesRequest withMemberAccountId(String memberAccountId) {
        this.memberAccountId = memberAccountId;
        return this;
    }
    @JsonProperty("s3ResourcesUpdate")
    public S3ResourceClassificationUpdate[] s3ResourcesUpdate;
    public UpdateS3ResourcesRequest withS3ResourcesUpdate(S3ResourceClassificationUpdate[] s3ResourcesUpdate) {
        this.s3ResourcesUpdate = s3ResourcesUpdate;
        return this;
    }
}