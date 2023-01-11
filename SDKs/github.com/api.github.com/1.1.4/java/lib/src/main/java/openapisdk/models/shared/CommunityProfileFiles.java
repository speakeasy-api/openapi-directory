package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommunityProfileFiles {
    @JsonProperty("code_of_conduct")
    public CommunityProfileFilesCodeOfConductSimple codeOfConduct;
    public CommunityProfileFiles withCodeOfConduct(CommunityProfileFilesCodeOfConductSimple codeOfConduct) {
        this.codeOfConduct = codeOfConduct;
        return this;
    }
    @JsonProperty("contributing")
    public CommunityProfileFilesCommunityHealthFile contributing;
    public CommunityProfileFiles withContributing(CommunityProfileFilesCommunityHealthFile contributing) {
        this.contributing = contributing;
        return this;
    }
    @JsonProperty("issue_template")
    public CommunityProfileFilesCommunityHealthFile issueTemplate;
    public CommunityProfileFiles withIssueTemplate(CommunityProfileFilesCommunityHealthFile issueTemplate) {
        this.issueTemplate = issueTemplate;
        return this;
    }
    @JsonProperty("license")
    public CommunityProfileFilesLicenseSimple license;
    public CommunityProfileFiles withLicense(CommunityProfileFilesLicenseSimple license) {
        this.license = license;
        return this;
    }
    @JsonProperty("pull_request_template")
    public CommunityProfileFilesCommunityHealthFile pullRequestTemplate;
    public CommunityProfileFiles withPullRequestTemplate(CommunityProfileFilesCommunityHealthFile pullRequestTemplate) {
        this.pullRequestTemplate = pullRequestTemplate;
        return this;
    }
    @JsonProperty("readme")
    public CommunityProfileFilesCommunityHealthFile readme;
    public CommunityProfileFiles withReadme(CommunityProfileFilesCommunityHealthFile readme) {
        this.readme = readme;
        return this;
    }
}