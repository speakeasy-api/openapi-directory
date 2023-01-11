package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElasticsearchDomainLogPublishingOptions
 * configures the CloudWatch Logs to publish for the Elasticsearch domain.
**/
public class AwsElasticsearchDomainLogPublishingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuditLogs")
    public AwsElasticsearchDomainLogPublishingOptionsLogConfig auditLogs;
    public AwsElasticsearchDomainLogPublishingOptions withAuditLogs(AwsElasticsearchDomainLogPublishingOptionsLogConfig auditLogs) {
        this.auditLogs = auditLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IndexSlowLogs")
    public AwsElasticsearchDomainLogPublishingOptionsLogConfig indexSlowLogs;
    public AwsElasticsearchDomainLogPublishingOptions withIndexSlowLogs(AwsElasticsearchDomainLogPublishingOptionsLogConfig indexSlowLogs) {
        this.indexSlowLogs = indexSlowLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SearchSlowLogs")
    public AwsElasticsearchDomainLogPublishingOptionsLogConfig searchSlowLogs;
    public AwsElasticsearchDomainLogPublishingOptions withSearchSlowLogs(AwsElasticsearchDomainLogPublishingOptionsLogConfig searchSlowLogs) {
        this.searchSlowLogs = searchSlowLogs;
        return this;
    }
}