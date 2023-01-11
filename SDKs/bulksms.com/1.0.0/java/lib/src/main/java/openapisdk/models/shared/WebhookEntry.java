package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public WebhookEntry withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactEmailAddress")
    public String contactEmailAddress;
    public WebhookEntry withContactEmailAddress(String contactEmailAddress) {
        this.contactEmailAddress = contactEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invokeOption")
    public WebhookEntryInvokeOptionEnum invokeOption;
    public WebhookEntry withInvokeOption(WebhookEntryInvokeOptionEnum invokeOption) {
        this.invokeOption = invokeOption;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WebhookEntry withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("onWebApp")
    public Boolean onWebApp;
    public WebhookEntry withOnWebApp(Boolean onWebApp) {
        this.onWebApp = onWebApp;
        return this;
    }
    @JsonProperty("triggerScope")
    public WebhookEntryTriggerScopeEnum triggerScope;
    public WebhookEntry withTriggerScope(WebhookEntryTriggerScopeEnum triggerScope) {
        this.triggerScope = triggerScope;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public WebhookEntry withUrl(String url) {
        this.url = url;
        return this;
    }
}