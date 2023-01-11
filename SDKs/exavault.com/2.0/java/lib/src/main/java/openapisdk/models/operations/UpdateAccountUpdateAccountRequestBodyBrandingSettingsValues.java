package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("companyName")
    public String companyName;
    public UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customEmail")
    public String customEmail;
    public UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues withCustomEmail(String customEmail) {
        this.customEmail = customEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public String theme;
    public UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues withTheme(String theme) {
        this.theme = theme;
        return this;
    }
}