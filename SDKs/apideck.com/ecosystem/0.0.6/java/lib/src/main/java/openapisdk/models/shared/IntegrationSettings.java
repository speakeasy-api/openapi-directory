package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IntegrationSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("albacross_id")
    public String albacrossId;
    public IntegrationSettings withAlbacrossId(String albacrossId) {
        this.albacrossId = albacrossId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automate_enabled")
    public Boolean automateEnabled;
    public IntegrationSettings withAutomateEnabled(Boolean automateEnabled) {
        this.automateEnabled = automateEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blendr_enabled")
    public Boolean blendrEnabled;
    public IntegrationSettings withBlendrEnabled(Boolean blendrEnabled) {
        this.blendrEnabled = blendrEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("combidesk_enabled")
    public Boolean combideskEnabled;
    public IntegrationSettings withCombideskEnabled(Boolean combideskEnabled) {
        this.combideskEnabled = combideskEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crisp_id")
    public String crispId;
    public IntegrationSettings withCrispId(String crispId) {
        this.crispId = crispId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drift_id")
    public String driftId;
    public IntegrationSettings withDriftId(String driftId) {
        this.driftId = driftId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_analytics_id")
    public String googleAnalyticsId;
    public IntegrationSettings withGoogleAnalyticsId(String googleAnalyticsId) {
        this.googleAnalyticsId = googleAnalyticsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_tag_manager_id")
    public String googleTagManagerId;
    public IntegrationSettings withGoogleTagManagerId(String googleTagManagerId) {
        this.googleTagManagerId = googleTagManagerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heap_id")
    public String heapId;
    public IntegrationSettings withHeapId(String heapId) {
        this.heapId = heapId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hubspot_portal_id")
    public String hubspotPortalId;
    public IntegrationSettings withHubspotPortalId(String hubspotPortalId) {
        this.hubspotPortalId = hubspotPortalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integromat_enabled")
    public Boolean integromatEnabled;
    public IntegrationSettings withIntegromatEnabled(Boolean integromatEnabled) {
        this.integromatEnabled = integromatEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intercom_app_id")
    public String intercomAppId;
    public IntegrationSettings withIntercomAppId(String intercomAppId) {
        this.intercomAppId = intercomAppId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iubenda_cookie_policy_id")
    public String iubendaCookiePolicyId;
    public IntegrationSettings withIubendaCookiePolicyId(String iubendaCookiePolicyId) {
        this.iubendaCookiePolicyId = iubendaCookiePolicyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iubenda_site_id")
    public String iubendaSiteId;
    public IntegrationSettings withIubendaSiteId(String iubendaSiteId) {
        this.iubendaSiteId = iubendaSiteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("journy_io_domain")
    public String journyIoDomain;
    public IntegrationSettings withJournyIoDomain(String journyIoDomain) {
        this.journyIoDomain = journyIoDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("journy_io_id")
    public String journyIoId;
    public IntegrationSettings withJournyIoId(String journyIoId) {
        this.journyIoId = journyIoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("livechat_id")
    public String livechatId;
    public IntegrationSettings withLivechatId(String livechatId) {
        this.livechatId = livechatId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metomic_id")
    public String metomicId;
    public IntegrationSettings withMetomicId(String metomicId) {
        this.metomicId = metomicId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsoft_flow_enabled")
    public Boolean microsoftFlowEnabled;
    public IntegrationSettings withMicrosoftFlowEnabled(Boolean microsoftFlowEnabled) {
        this.microsoftFlowEnabled = microsoftFlowEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("microsoft_flow_id")
    public String microsoftFlowId;
    public IntegrationSettings withMicrosoftFlowId(String microsoftFlowId) {
        this.microsoftFlowId = microsoftFlowId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onetrust_id")
    public String onetrustId;
    public IntegrationSettings withOnetrustId(String onetrustId) {
        this.onetrustId = onetrustId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("piesync_enabled")
    public Boolean piesyncEnabled;
    public IntegrationSettings withPiesyncEnabled(Boolean piesyncEnabled) {
        this.piesyncEnabled = piesyncEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment_enabled")
    public Boolean segmentEnabled;
    public IntegrationSettings withSegmentEnabled(Boolean segmentEnabled) {
        this.segmentEnabled = segmentEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segment_id")
    public String segmentId;
    public IntegrationSettings withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tray_io_enabled")
    public Boolean trayIoEnabled;
    public IntegrationSettings withTrayIoEnabled(Boolean trayIoEnabled) {
        this.trayIoEnabled = trayIoEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zapier_beta_link")
    public String zapierBetaLink;
    public IntegrationSettings withZapierBetaLink(String zapierBetaLink) {
        this.zapierBetaLink = zapierBetaLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zapier_enabled")
    public Boolean zapierEnabled;
    public IntegrationSettings withZapierEnabled(Boolean zapierEnabled) {
        this.zapierEnabled = zapierEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zapier_id")
    public String zapierId;
    public IntegrationSettings withZapierId(String zapierId) {
        this.zapierId = zapierId;
        return this;
    }
}