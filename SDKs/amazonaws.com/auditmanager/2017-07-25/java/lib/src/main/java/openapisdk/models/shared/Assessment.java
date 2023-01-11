package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Assessment
 *  An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. 
**/
public class Assessment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Assessment withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsAccount")
    public AwsAccount awsAccount;
    public Assessment withAwsAccount(AwsAccount awsAccount) {
        this.awsAccount = awsAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("framework")
    public AssessmentFramework framework;
    public Assessment withFramework(AssessmentFramework framework) {
        this.framework = framework;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public AssessmentMetadata metadata;
    public Assessment withMetadata(AssessmentMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public Assessment withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}