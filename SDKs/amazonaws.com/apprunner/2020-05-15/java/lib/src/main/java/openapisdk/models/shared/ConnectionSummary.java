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
 * ConnectionSummary
 * Provides summary information about an AWS App Runner connection resource.
**/
public class ConnectionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public ConnectionSummary withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionName")
    public String connectionName;
    public ConnectionSummary withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public ConnectionSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderType")
    public ProviderTypeEnum providerType;
    public ConnectionSummary withProviderType(ProviderTypeEnum providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ConnectionStatusEnum status;
    public ConnectionSummary withStatus(ConnectionStatusEnum status) {
        this.status = status;
        return this;
    }
}