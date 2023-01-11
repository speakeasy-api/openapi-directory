package openapisdk.models.shared;



/**
 * RuleCondition
 * <p>Information about a condition for a rule.</p> <p>Each rule can optionally include up to one of each of the following conditions: <code>http-request-method</code>, <code>host-header</code>, <code>path-pattern</code>, and <code>source-ip</code>. Each rule can also optionally include one or more of each of the following conditions: <code>http-header</code> and <code>query-string</code>.</p>
**/
public class RuleCondition {
    public String field;
    public RuleCondition withField(String field) {
        this.field = field;
        return this;
    }
    public HostHeaderConditionConfig hostHeaderConfig;
    public RuleCondition withHostHeaderConfig(HostHeaderConditionConfig hostHeaderConfig) {
        this.hostHeaderConfig = hostHeaderConfig;
        return this;
    }
    public HttpHeaderConditionConfig httpHeaderConfig;
    public RuleCondition withHttpHeaderConfig(HttpHeaderConditionConfig httpHeaderConfig) {
        this.httpHeaderConfig = httpHeaderConfig;
        return this;
    }
    public HttpRequestMethodConditionConfig httpRequestMethodConfig;
    public RuleCondition withHttpRequestMethodConfig(HttpRequestMethodConditionConfig httpRequestMethodConfig) {
        this.httpRequestMethodConfig = httpRequestMethodConfig;
        return this;
    }
    public PathPatternConditionConfig pathPatternConfig;
    public RuleCondition withPathPatternConfig(PathPatternConditionConfig pathPatternConfig) {
        this.pathPatternConfig = pathPatternConfig;
        return this;
    }
    public QueryStringConditionConfig queryStringConfig;
    public RuleCondition withQueryStringConfig(QueryStringConditionConfig queryStringConfig) {
        this.queryStringConfig = queryStringConfig;
        return this;
    }
    public SourceIpConditionConfig sourceIpConfig;
    public RuleCondition withSourceIpConfig(SourceIpConditionConfig sourceIpConfig) {
        this.sourceIpConfig = sourceIpConfig;
        return this;
    }
    public String[] values;
    public RuleCondition withValues(String[] values) {
        this.values = values;
        return this;
    }
}