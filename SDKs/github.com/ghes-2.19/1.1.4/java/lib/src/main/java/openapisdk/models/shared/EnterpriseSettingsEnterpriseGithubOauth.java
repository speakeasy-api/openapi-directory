package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseGithubOauth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public EnterpriseSettingsEnterpriseGithubOauth withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_secret")
    public String clientSecret;
    public EnterpriseSettingsEnterpriseGithubOauth withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_name")
    public String organizationName;
    public EnterpriseSettingsEnterpriseGithubOauth withOrganizationName(String organizationName) {
        this.organizationName = organizationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_team")
    public String organizationTeam;
    public EnterpriseSettingsEnterpriseGithubOauth withOrganizationTeam(String organizationTeam) {
        this.organizationTeam = organizationTeam;
        return this;
    }
}