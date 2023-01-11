package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateDomainResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public CreateDomainResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeadLetterQueueUrl")
    public String deadLetterQueueUrl;
    public CreateDomainResponse withDeadLetterQueueUrl(String deadLetterQueueUrl) {
        this.deadLetterQueueUrl = deadLetterQueueUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultEncryptionKey")
    public String defaultEncryptionKey;
    public CreateDomainResponse withDefaultEncryptionKey(String defaultEncryptionKey) {
        this.defaultEncryptionKey = defaultEncryptionKey;
        return this;
    }
    @JsonProperty("DefaultExpirationDays")
    public Long defaultExpirationDays;
    public CreateDomainResponse withDefaultExpirationDays(Long defaultExpirationDays) {
        this.defaultExpirationDays = defaultExpirationDays;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public CreateDomainResponse withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public CreateDomainResponse withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Matching")
    public MatchingResponse matching;
    public CreateDomainResponse withMatching(MatchingResponse matching) {
        this.matching = matching;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateDomainResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}