package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartBulkDeploymentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BulkDeploymentArn")
    public String bulkDeploymentArn;
    public StartBulkDeploymentResponse withBulkDeploymentArn(String bulkDeploymentArn) {
        this.bulkDeploymentArn = bulkDeploymentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BulkDeploymentId")
    public String bulkDeploymentId;
    public StartBulkDeploymentResponse withBulkDeploymentId(String bulkDeploymentId) {
        this.bulkDeploymentId = bulkDeploymentId;
        return this;
    }
}