package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VisualReferenceOutput
 * <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>
**/
public class VisualReferenceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseCanaryRunId")
    public String baseCanaryRunId;
    public VisualReferenceOutput withBaseCanaryRunId(String baseCanaryRunId) {
        this.baseCanaryRunId = baseCanaryRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BaseScreenshots")
    public BaseScreenshot[] baseScreenshots;
    public VisualReferenceOutput withBaseScreenshots(BaseScreenshot[] baseScreenshots) {
        this.baseScreenshots = baseScreenshots;
        return this;
    }
}