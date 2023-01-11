package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditLogEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@timestamp")
    public Long atTimestamp;
    public AuditLogEvent withAtTimestamp(Long atTimestamp) {
        this.atTimestamp = atTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public AuditLogEvent withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public AuditLogEvent withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_was")
    public Boolean activeWas;
    public AuditLogEvent withActiveWas(Boolean activeWas) {
        this.activeWas = activeWas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public String actor;
    public AuditLogEvent withActor(String actor) {
        this.actor = actor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blocked_user")
    public String blockedUser;
    public AuditLogEvent withBlockedUser(String blockedUser) {
        this.blockedUser = blockedUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business")
    public String business;
    public AuditLogEvent withBusiness(String business) {
        this.business = business;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public Object[] config;
    public AuditLogEvent withConfig(Object[] config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config_was")
    public Object[] configWas;
    public AuditLogEvent withConfigWas(Object[] configWas) {
        this.configWas = configWas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_type")
    public String contentType;
    public AuditLogEvent withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public Long createdAt;
    public AuditLogEvent withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploy_key_fingerprint")
    public String deployKeyFingerprint;
    public AuditLogEvent withDeployKeyFingerprint(String deployKeyFingerprint) {
        this.deployKeyFingerprint = deployKeyFingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emoji")
    public String emoji;
    public AuditLogEvent withEmoji(String emoji) {
        this.emoji = emoji;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public Object[] events;
    public AuditLogEvent withEvents(Object[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events_were")
    public Object[] eventsWere;
    public AuditLogEvent withEventsWere(Object[] eventsWere) {
        this.eventsWere = eventsWere;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explanation")
    public String explanation;
    public AuditLogEvent withExplanation(String explanation) {
        this.explanation = explanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public AuditLogEvent withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hook_id")
    public Long hookId;
    public AuditLogEvent withHookId(Long hookId) {
        this.hookId = hookId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limited_availability")
    public Boolean limitedAvailability;
    public AuditLogEvent withLimitedAvailability(Boolean limitedAvailability) {
        this.limitedAvailability = limitedAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public AuditLogEvent withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AuditLogEvent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("old_user")
    public String oldUser;
    public AuditLogEvent withOldUser(String oldUser) {
        this.oldUser = oldUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openssh_public_key")
    public String opensshPublicKey;
    public AuditLogEvent withOpensshPublicKey(String opensshPublicKey) {
        this.opensshPublicKey = opensshPublicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("org")
    public String org;
    public AuditLogEvent withOrg(String org) {
        this.org = org;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_visibility")
    public String previousVisibility;
    public AuditLogEvent withPreviousVisibility(String previousVisibility) {
        this.previousVisibility = previousVisibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read_only")
    public Boolean readOnly;
    public AuditLogEvent withReadOnly(Boolean readOnly) {
        this.readOnly = readOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repo")
    public String repo;
    public AuditLogEvent withRepo(String repo) {
        this.repo = repo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository")
    public String repository;
    public AuditLogEvent withRepository(String repository) {
        this.repository = repository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repository_public")
    public Boolean repositoryPublic;
    public AuditLogEvent withRepositoryPublic(Boolean repositoryPublic) {
        this.repositoryPublic = repositoryPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target_login")
    public String targetLogin;
    public AuditLogEvent withTargetLogin(String targetLogin) {
        this.targetLogin = targetLogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public String team;
    public AuditLogEvent withTeam(String team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol")
    public Long transportProtocol;
    public AuditLogEvent withTransportProtocol(Long transportProtocol) {
        this.transportProtocol = transportProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol_name")
    public String transportProtocolName;
    public AuditLogEvent withTransportProtocolName(String transportProtocolName) {
        this.transportProtocolName = transportProtocolName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public AuditLogEvent withUser(String user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public String visibility;
    public AuditLogEvent withVisibility(String visibility) {
        this.visibility = visibility;
        return this;
    }
}