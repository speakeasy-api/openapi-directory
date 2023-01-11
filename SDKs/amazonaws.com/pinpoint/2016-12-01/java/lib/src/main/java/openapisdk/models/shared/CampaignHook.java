package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignHook
 * Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.
**/
public class CampaignHook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LambdaFunctionName")
    public String lambdaFunctionName;
    public CampaignHook withLambdaFunctionName(String lambdaFunctionName) {
        this.lambdaFunctionName = lambdaFunctionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mode")
    public ModeEnum mode;
    public CampaignHook withMode(ModeEnum mode) {
        this.mode = mode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WebUrl")
    public String webUrl;
    public CampaignHook withWebUrl(String webUrl) {
        this.webUrl = webUrl;
        return this;
    }
}