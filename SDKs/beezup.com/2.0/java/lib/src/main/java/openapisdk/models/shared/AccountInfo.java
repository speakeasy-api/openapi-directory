package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyInfo")
    public CompanyInfo companyInfo;
    public AccountInfo withCompanyInfo(CompanyInfo companyInfo) {
        this.companyInfo = companyInfo;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public AccountInfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public BeezUpCommonInfoSummaries info;
    public AccountInfo withInfo(BeezUpCommonInfoSummaries info) {
        this.info = info;
        return this;
    }
    @JsonProperty("links")
    public AccountInfoLinks links;
    public AccountInfo withLinks(AccountInfoLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personalInfo")
    public PersonalInfo personalInfo;
    public AccountInfo withPersonalInfo(PersonalInfo personalInfo) {
        this.personalInfo = personalInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilePictureUrl")
    public String profilePictureUrl;
    public AccountInfo withProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
        return this;
    }
    @JsonProperty("status")
    public AccountStatusEnum status;
    public AccountInfo withStatus(AccountStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public AccountInfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}