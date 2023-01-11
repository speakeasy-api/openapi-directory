package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BatchExecuteStatementOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterIdentifier")
    public String clusterIdentifier;
    public BatchExecuteStatementOutput withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public BatchExecuteStatementOutput withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Database")
    public String database;
    public BatchExecuteStatementOutput withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbUser")
    public String dbUser;
    public BatchExecuteStatementOutput withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public BatchExecuteStatementOutput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretArn")
    public String secretArn;
    public BatchExecuteStatementOutput withSecretArn(String secretArn) {
        this.secretArn = secretArn;
        return this;
    }
}