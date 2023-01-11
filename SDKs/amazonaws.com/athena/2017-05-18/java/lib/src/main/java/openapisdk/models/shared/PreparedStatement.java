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
 * PreparedStatement
 * A prepared SQL statement for use with Athena.
**/
public class PreparedStatement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PreparedStatement withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedTime")
    public OffsetDateTime lastModifiedTime;
    public PreparedStatement withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryStatement")
    public String queryStatement;
    public PreparedStatement withQueryStatement(String queryStatement) {
        this.queryStatement = queryStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatementName")
    public String statementName;
    public PreparedStatement withStatementName(String statementName) {
        this.statementName = statementName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkGroupName")
    public String workGroupName;
    public PreparedStatement withWorkGroupName(String workGroupName) {
        this.workGroupName = workGroupName;
        return this;
    }
}