package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SessionSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_redirect")
    public Boolean autoRedirect;
    public SessionSettings withAutoRedirect(Boolean autoRedirect) {
        this.autoRedirect = autoRedirect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_resource_settings")
    public Boolean hideResourceSettings;
    public SessionSettings withHideResourceSettings(Boolean hideResourceSettings) {
        this.hideResourceSettings = hideResourceSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isolation_mode")
    public Boolean isolationMode;
    public SessionSettings withIsolationMode(Boolean isolationMode) {
        this.isolationMode = isolationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sandbox_mode")
    public Boolean sandboxMode;
    public SessionSettings withSandboxMode(Boolean sandboxMode) {
        this.sandboxMode = sandboxMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session_length")
    public String sessionLength;
    public SessionSettings withSessionLength(String sessionLength) {
        this.sessionLength = sessionLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_logs")
    public Boolean showLogs;
    public SessionSettings withShowLogs(Boolean showLogs) {
        this.showLogs = showLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_sidebar")
    public Boolean showSidebar;
    public SessionSettings withShowSidebar(Boolean showSidebar) {
        this.showSidebar = showSidebar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_suggestions")
    public Boolean showSuggestions;
    public SessionSettings withShowSuggestions(Boolean showSuggestions) {
        this.showSuggestions = showSuggestions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unified_apis")
    public UnifiedApiIdEnum[] unifiedApis;
    public SessionSettings withUnifiedApis(UnifiedApiIdEnum[] unifiedApis) {
        this.unifiedApis = unifiedApis;
        return this;
    }
}