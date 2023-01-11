package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainAssociationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSubDomainCreationPatterns")
    public String[] autoSubDomainCreationPatterns;
    public CreateDomainAssociationRequestBody withAutoSubDomainCreationPatterns(String[] autoSubDomainCreationPatterns) {
        this.autoSubDomainCreationPatterns = autoSubDomainCreationPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSubDomainIAMRole")
    public String autoSubDomainIAMRole;
    public CreateDomainAssociationRequestBody withAutoSubDomainIamRole(String autoSubDomainIAMRole) {
        this.autoSubDomainIAMRole = autoSubDomainIAMRole;
        return this;
    }
    @JsonProperty("domainName")
    public String domainName;
    public CreateDomainAssociationRequestBody withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoSubDomain")
    public Boolean enableAutoSubDomain;
    public CreateDomainAssociationRequestBody withEnableAutoSubDomain(Boolean enableAutoSubDomain) {
        this.enableAutoSubDomain = enableAutoSubDomain;
        return this;
    }
    @JsonProperty("subDomainSettings")
    public openapisdk.models.shared.SubDomainSetting[] subDomainSettings;
    public CreateDomainAssociationRequestBody withSubDomainSettings(openapisdk.models.shared.SubDomainSetting[] subDomainSettings) {
        this.subDomainSettings = subDomainSettings;
        return this;
    }
}