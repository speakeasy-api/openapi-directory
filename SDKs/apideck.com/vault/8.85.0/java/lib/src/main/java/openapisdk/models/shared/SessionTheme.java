package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SessionTheme {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favicon")
    public String favicon;
    public SessionTheme withFavicon(String favicon) {
        this.favicon = favicon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_color")
    public String primaryColor;
    public SessionTheme withPrimaryColor(String primaryColor) {
        this.primaryColor = primaryColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privacy_url")
    public String privacyUrl;
    public SessionTheme withPrivacyUrl(String privacyUrl) {
        this.privacyUrl = privacyUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sidepanel_background_color")
    public String sidepanelBackgroundColor;
    public SessionTheme withSidepanelBackgroundColor(String sidepanelBackgroundColor) {
        this.sidepanelBackgroundColor = sidepanelBackgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sidepanel_text_color")
    public String sidepanelTextColor;
    public SessionTheme withSidepanelTextColor(String sidepanelTextColor) {
        this.sidepanelTextColor = sidepanelTextColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terms_url")
    public String termsUrl;
    public SessionTheme withTermsUrl(String termsUrl) {
        this.termsUrl = termsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vault_name")
    public String vaultName;
    public SessionTheme withVaultName(String vaultName) {
        this.vaultName = vaultName;
        return this;
    }
}