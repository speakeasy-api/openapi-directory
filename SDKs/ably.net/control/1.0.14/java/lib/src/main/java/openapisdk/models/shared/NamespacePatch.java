package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NamespacePatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticated")
    public Boolean authenticated;
    public NamespacePatch withAuthenticated(Boolean authenticated) {
        this.authenticated = authenticated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistLast")
    public Boolean persistLast;
    public NamespacePatch withPersistLast(Boolean persistLast) {
        this.persistLast = persistLast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persisted")
    public Boolean persisted;
    public NamespacePatch withPersisted(Boolean persisted) {
        this.persisted = persisted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pushEnabled")
    public Boolean pushEnabled;
    public NamespacePatch withPushEnabled(Boolean pushEnabled) {
        this.pushEnabled = pushEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsOnly")
    public Boolean tlsOnly;
    public NamespacePatch withTlsOnly(Boolean tlsOnly) {
        this.tlsOnly = tlsOnly;
        return this;
    }
}