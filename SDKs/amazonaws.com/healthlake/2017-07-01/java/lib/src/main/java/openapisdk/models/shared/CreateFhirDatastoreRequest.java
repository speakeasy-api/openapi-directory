package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFhirDatastoreRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;
    public CreateFhirDatastoreRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatastoreName")
    public String datastoreName;
    public CreateFhirDatastoreRequest withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
    @JsonProperty("DatastoreTypeVersion")
    public FhirVersionEnum datastoreTypeVersion;
    public CreateFhirDatastoreRequest withDatastoreTypeVersion(FhirVersionEnum datastoreTypeVersion) {
        this.datastoreTypeVersion = datastoreTypeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreloadDataConfig")
    public PreloadDataConfig preloadDataConfig;
    public CreateFhirDatastoreRequest withPreloadDataConfig(PreloadDataConfig preloadDataConfig) {
        this.preloadDataConfig = preloadDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SseConfiguration")
    public SseConfiguration sseConfiguration;
    public CreateFhirDatastoreRequest withSseConfiguration(SseConfiguration sseConfiguration) {
        this.sseConfiguration = sseConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateFhirDatastoreRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}