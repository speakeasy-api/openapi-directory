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
 * RefreshSchemasStatus
 * Provides information that describes status of a schema at an endpoint specified by the <code>DescribeRefreshSchemaStatus</code> operation.
**/
public class RefreshSchemasStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointArn")
    public String endpointArn;
    public RefreshSchemasStatus withEndpointArn(String endpointArn) {
        this.endpointArn = endpointArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastFailureMessage")
    public String lastFailureMessage;
    public RefreshSchemasStatus withLastFailureMessage(String lastFailureMessage) {
        this.lastFailureMessage = lastFailureMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastRefreshDate")
    public OffsetDateTime lastRefreshDate;
    public RefreshSchemasStatus withLastRefreshDate(OffsetDateTime lastRefreshDate) {
        this.lastRefreshDate = lastRefreshDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceArn")
    public String replicationInstanceArn;
    public RefreshSchemasStatus withReplicationInstanceArn(String replicationInstanceArn) {
        this.replicationInstanceArn = replicationInstanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public RefreshSchemasStatusTypeValueEnum status;
    public RefreshSchemasStatus withStatus(RefreshSchemasStatusTypeValueEnum status) {
        this.status = status;
        return this;
    }
}