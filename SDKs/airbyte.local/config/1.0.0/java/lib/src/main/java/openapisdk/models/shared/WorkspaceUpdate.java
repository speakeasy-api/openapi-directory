package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WorkspaceUpdate {
    @JsonProperty("anonymousDataCollection")
    public Boolean anonymousDataCollection;
    public WorkspaceUpdate withAnonymousDataCollection(Boolean anonymousDataCollection) {
        this.anonymousDataCollection = anonymousDataCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displaySetupWizard")
    public Boolean displaySetupWizard;
    public WorkspaceUpdate withDisplaySetupWizard(Boolean displaySetupWizard) {
        this.displaySetupWizard = displaySetupWizard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public WorkspaceUpdate withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("initialSetupComplete")
    public Boolean initialSetupComplete;
    public WorkspaceUpdate withInitialSetupComplete(Boolean initialSetupComplete) {
        this.initialSetupComplete = initialSetupComplete;
        return this;
    }
    @JsonProperty("news")
    public Boolean news;
    public WorkspaceUpdate withNews(Boolean news) {
        this.news = news;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public Notification[] notifications;
    public WorkspaceUpdate withNotifications(Notification[] notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonProperty("securityUpdates")
    public Boolean securityUpdates;
    public WorkspaceUpdate withSecurityUpdates(Boolean securityUpdates) {
        this.securityUpdates = securityUpdates;
        return this;
    }
    @JsonProperty("workspaceId")
    public String workspaceId;
    public WorkspaceUpdate withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}