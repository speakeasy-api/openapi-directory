package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCanaryRequestBodyVisualReference
 * <p>An object that specifies what screenshots to use as a baseline for visual monitoring by this canary, and optionally the parts of the screenshots to ignore during the visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html"> Visual monitoring</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html"> Visual monitoring blueprint</a> </p>
**/
public class UpdateCanaryRequestBodyVisualReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseCanaryRunId")
    public String baseCanaryRunId;
    public UpdateCanaryRequestBodyVisualReference withBaseCanaryRunId(String baseCanaryRunId) {
        this.baseCanaryRunId = baseCanaryRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseScreenshots")
    public openapisdk.models.shared.BaseScreenshot[] baseScreenshots;
    public UpdateCanaryRequestBodyVisualReference withBaseScreenshots(openapisdk.models.shared.BaseScreenshot[] baseScreenshots) {
        this.baseScreenshots = baseScreenshots;
        return this;
    }
}