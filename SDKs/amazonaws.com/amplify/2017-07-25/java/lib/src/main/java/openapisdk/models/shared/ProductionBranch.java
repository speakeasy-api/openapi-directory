package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ProductionBranch
 *  Describes the information about a production branch for an Amplify app. 
**/
public class ProductionBranch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchName")
    public String branchName;
    public ProductionBranch withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastDeployTime")
    public OffsetDateTime lastDeployTime;
    public ProductionBranch withLastDeployTime(OffsetDateTime lastDeployTime) {
        this.lastDeployTime = lastDeployTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ProductionBranch withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailUrl")
    public String thumbnailUrl;
    public ProductionBranch withThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
        return this;
    }
}