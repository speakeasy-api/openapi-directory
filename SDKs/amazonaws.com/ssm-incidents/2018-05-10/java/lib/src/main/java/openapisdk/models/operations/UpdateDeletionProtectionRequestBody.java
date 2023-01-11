package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeletionProtectionRequestBody {
    @JsonProperty("arn")
    public String arn;
    public UpdateDeletionProtectionRequestBody withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateDeletionProtectionRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("deletionProtected")
    public Boolean deletionProtected;
    public UpdateDeletionProtectionRequestBody withDeletionProtected(Boolean deletionProtected) {
        this.deletionProtected = deletionProtected;
        return this;
    }
}