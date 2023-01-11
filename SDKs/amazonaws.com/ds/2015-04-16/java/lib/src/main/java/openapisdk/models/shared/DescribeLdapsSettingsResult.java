package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLdapsSettingsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LDAPSSettingsInfo")
    public LdapsSettingInfo[] ldapsSettingsInfo;
    public DescribeLdapsSettingsResult withLdapsSettingsInfo(LdapsSettingInfo[] ldapsSettingsInfo) {
        this.ldapsSettingsInfo = ldapsSettingsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeLdapsSettingsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}