package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryInfo
 * Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation. 
**/
public class QueryInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public Long createTime;
    public QueryInfo withCreateTime(Long createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupName")
    public String logGroupName;
    public QueryInfo withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryId")
    public String queryId;
    public QueryInfo withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryString")
    public String queryString;
    public QueryInfo withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public QueryStatusEnum status;
    public QueryInfo withStatus(QueryStatusEnum status) {
        this.status = status;
        return this;
    }
}