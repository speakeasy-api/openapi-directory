package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeClientAuthenticationSettingsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientAuthenticationSettingsInfo")
    public ClientAuthenticationSettingInfo[] clientAuthenticationSettingsInfo;
    public DescribeClientAuthenticationSettingsResult withClientAuthenticationSettingsInfo(ClientAuthenticationSettingInfo[] clientAuthenticationSettingsInfo) {
        this.clientAuthenticationSettingsInfo = clientAuthenticationSettingsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeClientAuthenticationSettingsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}