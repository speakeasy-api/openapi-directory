package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationInfo
 * Describes the status of the application.
**/
public class ApplicationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CWEMonitorEnabled")
    public Boolean cweMonitorEnabled;
    public ApplicationInfo withCweMonitorEnabled(Boolean cweMonitorEnabled) {
        this.cweMonitorEnabled = cweMonitorEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LifeCycle")
    public String lifeCycle;
    public ApplicationInfo withLifeCycle(String lifeCycle) {
        this.lifeCycle = lifeCycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpsCenterEnabled")
    public Boolean opsCenterEnabled;
    public ApplicationInfo withOpsCenterEnabled(Boolean opsCenterEnabled) {
        this.opsCenterEnabled = opsCenterEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpsItemSNSTopicArn")
    public String opsItemSNSTopicArn;
    public ApplicationInfo withOpsItemSnsTopicArn(String opsItemSNSTopicArn) {
        this.opsItemSNSTopicArn = opsItemSNSTopicArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Remarks")
    public String remarks;
    public ApplicationInfo withRemarks(String remarks) {
        this.remarks = remarks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceGroupName")
    public String resourceGroupName;
    public ApplicationInfo withResourceGroupName(String resourceGroupName) {
        this.resourceGroupName = resourceGroupName;
        return this;
    }
}