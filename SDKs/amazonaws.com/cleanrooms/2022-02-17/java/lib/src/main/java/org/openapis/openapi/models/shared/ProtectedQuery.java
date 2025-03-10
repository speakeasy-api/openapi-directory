/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * ProtectedQuery - The parameters for an AWS Clean Rooms protected query.
 */
public class ProtectedQuery {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createTime")
    public OffsetDateTime createTime;

    public ProtectedQuery withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ProtectedQueryError error;

    public ProtectedQuery withError(ProtectedQueryError error) {
        this.error = error;
        return this;
    }
    
    @JsonProperty("id")
    public String id;

    public ProtectedQuery withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonProperty("membershipArn")
    public String membershipArn;

    public ProtectedQuery withMembershipArn(String membershipArn) {
        this.membershipArn = membershipArn;
        return this;
    }
    
    @JsonProperty("membershipId")
    public String membershipId;

    public ProtectedQuery withMembershipId(String membershipId) {
        this.membershipId = membershipId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public ProtectedQueryResult result;

    public ProtectedQuery withResult(ProtectedQueryResult result) {
        this.result = result;
        return this;
    }
    
    @JsonProperty("resultConfiguration")
    public ProtectedQueryResultConfiguration resultConfiguration;

    public ProtectedQuery withResultConfiguration(ProtectedQueryResultConfiguration resultConfiguration) {
        this.resultConfiguration = resultConfiguration;
        return this;
    }
    
    @JsonProperty("sqlParameters")
    public ProtectedQuerySQLParameters sqlParameters;

    public ProtectedQuery withSqlParameters(ProtectedQuerySQLParameters sqlParameters) {
        this.sqlParameters = sqlParameters;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public ProtectedQueryStatistics statistics;

    public ProtectedQuery withStatistics(ProtectedQueryStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
    
    @JsonProperty("status")
    public ProtectedQueryStatusEnum status;

    public ProtectedQuery withStatus(ProtectedQueryStatusEnum status) {
        this.status = status;
        return this;
    }
    
    public ProtectedQuery(@JsonProperty("createTime") OffsetDateTime createTime, @JsonProperty("id") String id, @JsonProperty("membershipArn") String membershipArn, @JsonProperty("membershipId") String membershipId, @JsonProperty("resultConfiguration") ProtectedQueryResultConfiguration resultConfiguration, @JsonProperty("sqlParameters") ProtectedQuerySQLParameters sqlParameters, @JsonProperty("status") ProtectedQueryStatusEnum status) {
        this.createTime = createTime;
        this.id = id;
        this.membershipArn = membershipArn;
        this.membershipId = membershipId;
        this.resultConfiguration = resultConfiguration;
        this.sqlParameters = sqlParameters;
        this.status = status;
  }
}
