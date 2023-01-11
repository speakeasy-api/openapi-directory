package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateContactListRequestBody {
    @JsonProperty("ContactListName")
    public String contactListName;
    public CreateContactListRequestBody withContactListName(String contactListName) {
        this.contactListName = contactListName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateContactListRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateContactListRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Topics")
    public openapisdk.models.shared.Topic[] topics;
    public CreateContactListRequestBody withTopics(openapisdk.models.shared.Topic[] topics) {
        this.topics = topics;
        return this;
    }
}