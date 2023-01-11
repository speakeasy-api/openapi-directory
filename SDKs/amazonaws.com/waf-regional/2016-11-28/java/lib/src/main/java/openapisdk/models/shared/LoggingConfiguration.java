package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoggingConfiguration
 * <note> <p>This is <b>AWS WAF Classic</b> documentation. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p> <p> <b>For the latest version of AWS WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p> </note> <p>The Amazon Kinesis Data Firehose, <code>RedactedFields</code> information, and the web ACL Amazon Resource Name (ARN).</p>
**/
public class LoggingConfiguration {
    @JsonProperty("LogDestinationConfigs")
    public String[] logDestinationConfigs;
    public LoggingConfiguration withLogDestinationConfigs(String[] logDestinationConfigs) {
        this.logDestinationConfigs = logDestinationConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedactedFields")
    public FieldToMatch[] redactedFields;
    public LoggingConfiguration withRedactedFields(FieldToMatch[] redactedFields) {
        this.redactedFields = redactedFields;
        return this;
    }
    @JsonProperty("ResourceArn")
    public String resourceArn;
    public LoggingConfiguration withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
}