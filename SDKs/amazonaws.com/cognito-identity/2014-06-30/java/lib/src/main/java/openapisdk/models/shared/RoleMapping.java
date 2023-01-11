package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RoleMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmbiguousRoleResolution")
    public AmbiguousRoleResolutionTypeEnum ambiguousRoleResolution;
    public RoleMapping withAmbiguousRoleResolution(AmbiguousRoleResolutionTypeEnum ambiguousRoleResolution) {
        this.ambiguousRoleResolution = ambiguousRoleResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RulesConfiguration")
    public RulesConfigurationType rulesConfiguration;
    public RoleMapping withRulesConfiguration(RulesConfigurationType rulesConfiguration) {
        this.rulesConfiguration = rulesConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public RoleMappingTypeEnum type;
    public RoleMapping withType(RoleMappingTypeEnum type) {
        this.type = type;
        return this;
    }
}