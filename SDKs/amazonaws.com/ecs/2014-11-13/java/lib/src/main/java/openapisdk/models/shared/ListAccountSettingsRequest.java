package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAccountSettingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveSettings")
    public Boolean effectiveSettings;
    public ListAccountSettingsRequest withEffectiveSettings(Boolean effectiveSettings) {
        this.effectiveSettings = effectiveSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListAccountSettingsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public SettingNameEnum name;
    public ListAccountSettingsRequest withName(SettingNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAccountSettingsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principalArn")
    public String principalArn;
    public ListAccountSettingsRequest withPrincipalArn(String principalArn) {
        this.principalArn = principalArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ListAccountSettingsRequest withValue(String value) {
        this.value = value;
        return this;
    }
}