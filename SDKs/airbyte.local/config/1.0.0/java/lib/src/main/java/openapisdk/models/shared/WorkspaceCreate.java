package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WorkspaceCreate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonymousDataCollection")
    public Boolean anonymousDataCollection;
    public WorkspaceCreate withAnonymousDataCollection(Boolean anonymousDataCollection) {
        this.anonymousDataCollection = anonymousDataCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public WorkspaceCreate withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WorkspaceCreate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("news")
    public Boolean news;
    public WorkspaceCreate withNews(Boolean news) {
        this.news = news;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public Notification[] notifications;
    public WorkspaceCreate withNotifications(Notification[] notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityUpdates")
    public Boolean securityUpdates;
    public WorkspaceCreate withSecurityUpdates(Boolean securityUpdates) {
        this.securityUpdates = securityUpdates;
        return this;
    }
}