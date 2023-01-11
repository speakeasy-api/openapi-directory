package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStudioRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminRoleArn")
    public String adminRoleArn;
    public UpdateStudioRequestBody withAdminRoleArn(String adminRoleArn) {
        this.adminRoleArn = adminRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UpdateStudioRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRoleArn")
    public String userRoleArn;
    public UpdateStudioRequestBody withUserRoleArn(String userRoleArn) {
        this.userRoleArn = userRoleArn;
        return this;
    }
}