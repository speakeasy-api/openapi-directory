/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LoggingConfiguration - &lt;note&gt; &lt;p&gt;This is &lt;b&gt;AWS WAF Classic&lt;/b&gt; documentation. For more information, see &lt;a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html"&gt;AWS WAF Classic&lt;/a&gt; in the developer guide.&lt;/p&gt; &lt;p&gt; &lt;b&gt;For the latest version of AWS WAF&lt;/b&gt;, use the AWS WAFV2 API and see the &lt;a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html"&gt;AWS WAF Developer Guide&lt;/a&gt;. With the latest version, AWS WAF has a single set of endpoints for regional and global use. &lt;/p&gt; &lt;/note&gt; &lt;p&gt;The Amazon Kinesis Data Firehose, &lt;code&gt;RedactedFields&lt;/code&gt; information, and the web ACL Amazon Resource Name (ARN).&lt;/p&gt;
 */
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
    
    public LoggingConfiguration(@JsonProperty("LogDestinationConfigs") String[] logDestinationConfigs, @JsonProperty("ResourceArn") String resourceArn) {
        this.logDestinationConfigs = logDestinationConfigs;
        this.resourceArn = resourceArn;
  }
}
