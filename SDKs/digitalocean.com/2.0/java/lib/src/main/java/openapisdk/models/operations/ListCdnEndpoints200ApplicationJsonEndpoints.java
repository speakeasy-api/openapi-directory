package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListCdnEndpoints200ApplicationJsonEndpoints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificate_id")
    public String certificateId;
    public ListCdnEndpoints200ApplicationJsonEndpoints withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListCdnEndpoints200ApplicationJsonEndpoints withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_domain")
    public String customDomain;
    public ListCdnEndpoints200ApplicationJsonEndpoints withCustomDomain(String customDomain) {
        this.customDomain = customDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public ListCdnEndpoints200ApplicationJsonEndpoints withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListCdnEndpoints200ApplicationJsonEndpoints withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("origin")
    public String origin;
    public ListCdnEndpoints200ApplicationJsonEndpoints withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ttl")
    public Long ttl;
    public ListCdnEndpoints200ApplicationJsonEndpoints withTtl(Long ttl) {
        this.ttl = ttl;
        return this;
    }
}