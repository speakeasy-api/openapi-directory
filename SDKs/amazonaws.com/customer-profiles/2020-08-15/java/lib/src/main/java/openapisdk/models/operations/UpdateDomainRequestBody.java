package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDomainRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeadLetterQueueUrl")
    public String deadLetterQueueUrl;
    public UpdateDomainRequestBody withDeadLetterQueueUrl(String deadLetterQueueUrl) {
        this.deadLetterQueueUrl = deadLetterQueueUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultEncryptionKey")
    public String defaultEncryptionKey;
    public UpdateDomainRequestBody withDefaultEncryptionKey(String defaultEncryptionKey) {
        this.defaultEncryptionKey = defaultEncryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultExpirationDays")
    public Long defaultExpirationDays;
    public UpdateDomainRequestBody withDefaultExpirationDays(Long defaultExpirationDays) {
        this.defaultExpirationDays = defaultExpirationDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Matching")
    public UpdateDomainRequestBodyMatching matching;
    public UpdateDomainRequestBody withMatching(UpdateDomainRequestBodyMatching matching) {
        this.matching = matching;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public UpdateDomainRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}