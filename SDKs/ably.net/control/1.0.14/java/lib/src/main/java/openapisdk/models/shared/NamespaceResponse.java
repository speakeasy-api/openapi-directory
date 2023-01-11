package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NamespaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticated")
    public Boolean authenticated;
    public NamespaceResponse withAuthenticated(Boolean authenticated) {
        this.authenticated = authenticated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public Long created;
    public NamespaceResponse withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public NamespaceResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified")
    public Long modified;
    public NamespaceResponse withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistLast")
    public Boolean persistLast;
    public NamespaceResponse withPersistLast(Boolean persistLast) {
        this.persistLast = persistLast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persisted")
    public Boolean persisted;
    public NamespaceResponse withPersisted(Boolean persisted) {
        this.persisted = persisted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushEnabled")
    public Boolean pushEnabled;
    public NamespaceResponse withPushEnabled(Boolean pushEnabled) {
        this.pushEnabled = pushEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsOnly")
    public Boolean tlsOnly;
    public NamespaceResponse withTlsOnly(Boolean tlsOnly) {
        this.tlsOnly = tlsOnly;
        return this;
    }
}