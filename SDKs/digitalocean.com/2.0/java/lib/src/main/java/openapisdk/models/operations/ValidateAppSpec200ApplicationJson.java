package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ValidateAppSpec200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_cost")
    public Integer appCost;
    public ValidateAppSpec200ApplicationJson withAppCost(Integer appCost) {
        this.appCost = appCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_is_static")
    public Boolean appIsStatic;
    public ValidateAppSpec200ApplicationJson withAppIsStatic(Boolean appIsStatic) {
        this.appIsStatic = appIsStatic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_name_available")
    public Boolean appNameAvailable;
    public ValidateAppSpec200ApplicationJson withAppNameAvailable(Boolean appNameAvailable) {
        this.appNameAvailable = appNameAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_name_suggestion")
    public String appNameSuggestion;
    public ValidateAppSpec200ApplicationJson withAppNameSuggestion(String appNameSuggestion) {
        this.appNameSuggestion = appNameSuggestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_tier_downgrade_cost")
    public Integer appTierDowngradeCost;
    public ValidateAppSpec200ApplicationJson withAppTierDowngradeCost(Integer appTierDowngradeCost) {
        this.appTierDowngradeCost = appTierDowngradeCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existing_static_apps")
    public String existingStaticApps;
    public ValidateAppSpec200ApplicationJson withExistingStaticApps(String existingStaticApps) {
        this.existingStaticApps = existingStaticApps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec;
    public ValidateAppSpec200ApplicationJson withSpec(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec) {
        this.spec = spec;
        return this;
    }
}