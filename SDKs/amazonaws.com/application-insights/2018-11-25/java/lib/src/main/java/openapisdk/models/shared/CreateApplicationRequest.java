package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApplicationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CWEMonitorEnabled")
    public Boolean cweMonitorEnabled;
    public CreateApplicationRequest withCweMonitorEnabled(Boolean cweMonitorEnabled) {
        this.cweMonitorEnabled = cweMonitorEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpsCenterEnabled")
    public Boolean opsCenterEnabled;
    public CreateApplicationRequest withOpsCenterEnabled(Boolean opsCenterEnabled) {
        this.opsCenterEnabled = opsCenterEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpsItemSNSTopicArn")
    public String opsItemSNSTopicArn;
    public CreateApplicationRequest withOpsItemSnsTopicArn(String opsItemSNSTopicArn) {
        this.opsItemSNSTopicArn = opsItemSNSTopicArn;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public CreateApplicationRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateApplicationRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}