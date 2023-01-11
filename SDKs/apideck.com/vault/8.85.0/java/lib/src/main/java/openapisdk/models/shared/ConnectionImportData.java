package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectionImportData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentials")
    public ConnectionImportDataCredentials credentials;
    public ConnectionImportData withCredentials(ConnectionImportDataCredentials credentials) {
        this.credentials = credentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public ConnectionImportData withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public java.util.Map<String, Object> settings;
    public ConnectionImportData withSettings(java.util.Map<String, Object> settings) {
        this.settings = settings;
        return this;
    }
}