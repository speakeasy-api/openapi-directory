package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FundingInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funder_name")
    public String funderName;
    public FundingInformation withFunderName(String funderName) {
        this.funderName = funderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grant_code")
    public String grantCode;
    public FundingInformation withGrantCode(String grantCode) {
        this.grantCode = grantCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public FundingInformation withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_user_defined")
    public Boolean isUserDefined;
    public FundingInformation withIsUserDefined(Boolean isUserDefined) {
        this.isUserDefined = isUserDefined;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public FundingInformation withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public FundingInformation withUrl(String url) {
        this.url = url;
        return this;
    }
}