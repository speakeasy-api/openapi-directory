package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDomainAssociationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSubDomainCreationPatterns")
    public String[] autoSubDomainCreationPatterns;
    public UpdateDomainAssociationRequestBody withAutoSubDomainCreationPatterns(String[] autoSubDomainCreationPatterns) {
        this.autoSubDomainCreationPatterns = autoSubDomainCreationPatterns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSubDomainIAMRole")
    public String autoSubDomainIAMRole;
    public UpdateDomainAssociationRequestBody withAutoSubDomainIamRole(String autoSubDomainIAMRole) {
        this.autoSubDomainIAMRole = autoSubDomainIAMRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAutoSubDomain")
    public Boolean enableAutoSubDomain;
    public UpdateDomainAssociationRequestBody withEnableAutoSubDomain(Boolean enableAutoSubDomain) {
        this.enableAutoSubDomain = enableAutoSubDomain;
        return this;
    }
    @JsonProperty("subDomainSettings")
    public openapisdk.models.shared.SubDomainSetting[] subDomainSettings;
    public UpdateDomainAssociationRequestBody withSubDomainSettings(openapisdk.models.shared.SubDomainSetting[] subDomainSettings) {
        this.subDomainSettings = subDomainSettings;
        return this;
    }
}