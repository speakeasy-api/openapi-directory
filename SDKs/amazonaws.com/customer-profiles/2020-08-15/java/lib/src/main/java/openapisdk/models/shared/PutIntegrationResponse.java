package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PutIntegrationResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public PutIntegrationResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public PutIntegrationResponse withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public PutIntegrationResponse withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonProperty("ObjectTypeName")
    public String objectTypeName;
    public PutIntegrationResponse withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public PutIntegrationResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("Uri")
    public String uri;
    public PutIntegrationResponse withUri(String uri) {
        this.uri = uri;
        return this;
    }
}