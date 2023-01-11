package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDomainRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeadLetterQueueUrl")
    public String deadLetterQueueUrl;
    public CreateDomainRequestBody withDeadLetterQueueUrl(String deadLetterQueueUrl) {
        this.deadLetterQueueUrl = deadLetterQueueUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultEncryptionKey")
    public String defaultEncryptionKey;
    public CreateDomainRequestBody withDefaultEncryptionKey(String defaultEncryptionKey) {
        this.defaultEncryptionKey = defaultEncryptionKey;
        return this;
    }
    @JsonProperty("DefaultExpirationDays")
    public Long defaultExpirationDays;
    public CreateDomainRequestBody withDefaultExpirationDays(Long defaultExpirationDays) {
        this.defaultExpirationDays = defaultExpirationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Matching")
    public CreateDomainRequestBodyMatching matching;
    public CreateDomainRequestBody withMatching(CreateDomainRequestBodyMatching matching) {
        this.matching = matching;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public CreateDomainRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}