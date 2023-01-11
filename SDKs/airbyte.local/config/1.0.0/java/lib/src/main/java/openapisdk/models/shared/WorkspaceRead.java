package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WorkspaceRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonymousDataCollection")
    public Boolean anonymousDataCollection;
    public WorkspaceRead withAnonymousDataCollection(Boolean anonymousDataCollection) {
        this.anonymousDataCollection = anonymousDataCollection;
        return this;
    }
    @JsonProperty("customerId")
    public String customerId;
    public WorkspaceRead withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displaySetupWizard")
    public Boolean displaySetupWizard;
    public WorkspaceRead withDisplaySetupWizard(Boolean displaySetupWizard) {
        this.displaySetupWizard = displaySetupWizard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public WorkspaceRead withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("initialSetupComplete")
    public Boolean initialSetupComplete;
    public WorkspaceRead withInitialSetupComplete(Boolean initialSetupComplete) {
        this.initialSetupComplete = initialSetupComplete;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WorkspaceRead withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("news")
    public Boolean news;
    public WorkspaceRead withNews(Boolean news) {
        this.news = news;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public Notification[] notifications;
    public WorkspaceRead withNotifications(Notification[] notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityUpdates")
    public Boolean securityUpdates;
    public WorkspaceRead withSecurityUpdates(Boolean securityUpdates) {
        this.securityUpdates = securityUpdates;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public WorkspaceRead withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonProperty("workspaceId")
    public String workspaceId;
    public WorkspaceRead withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}