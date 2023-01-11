package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApplicationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CWEMonitorEnabled")
    public Boolean cweMonitorEnabled;
    public UpdateApplicationRequest withCweMonitorEnabled(Boolean cweMonitorEnabled) {
        this.cweMonitorEnabled = cweMonitorEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpsCenterEnabled")
    public Boolean opsCenterEnabled;
    public UpdateApplicationRequest withOpsCenterEnabled(Boolean opsCenterEnabled) {
        this.opsCenterEnabled = opsCenterEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpsItemSNSTopicArn")
    public String opsItemSNSTopicArn;
    public UpdateApplicationRequest withOpsItemSnsTopicArn(String opsItemSNSTopicArn) {
        this.opsItemSNSTopicArn = opsItemSNSTopicArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoveSNSTopic")
    public Boolean removeSNSTopic;
    public UpdateApplicationRequest withRemoveSnsTopic(Boolean removeSNSTopic) {
        this.removeSNSTopic = removeSNSTopic;
        return this;
    }
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public UpdateApplicationRequest withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}