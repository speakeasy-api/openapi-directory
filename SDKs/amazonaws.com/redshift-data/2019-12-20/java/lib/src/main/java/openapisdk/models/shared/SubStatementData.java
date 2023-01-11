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
 * SubStatementData
 * Information about an SQL statement.
**/
public class SubStatementData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public SubStatementData withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Duration")
    public Long duration;
    public SubStatementData withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public String error;
    public SubStatementData withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HasResultSet")
    public Boolean hasResultSet;
    public SubStatementData withHasResultSet(Boolean hasResultSet) {
        this.hasResultSet = hasResultSet;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public SubStatementData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryString")
    public String queryString;
    public SubStatementData withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftQueryId")
    public Long redshiftQueryId;
    public SubStatementData withRedshiftQueryId(Long redshiftQueryId) {
        this.redshiftQueryId = redshiftQueryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultRows")
    public Long resultRows;
    public SubStatementData withResultRows(Long resultRows) {
        this.resultRows = resultRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultSize")
    public Long resultSize;
    public SubStatementData withResultSize(Long resultSize) {
        this.resultSize = resultSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StatementStatusStringEnum status;
    public SubStatementData withStatus(StatementStatusStringEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedAt")
    public OffsetDateTime updatedAt;
    public SubStatementData withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}