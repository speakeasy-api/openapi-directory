package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NamespacePost {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticated")
    public Boolean authenticated;
    public NamespacePost withAuthenticated(Boolean authenticated) {
        this.authenticated = authenticated;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public NamespacePost withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistLast")
    public Boolean persistLast;
    public NamespacePost withPersistLast(Boolean persistLast) {
        this.persistLast = persistLast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persisted")
    public Boolean persisted;
    public NamespacePost withPersisted(Boolean persisted) {
        this.persisted = persisted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushEnabled")
    public Boolean pushEnabled;
    public NamespacePost withPushEnabled(Boolean pushEnabled) {
        this.pushEnabled = pushEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsOnly")
    public Boolean tlsOnly;
    public NamespacePost withTlsOnly(Boolean tlsOnly) {
        this.tlsOnly = tlsOnly;
        return this;
    }
}