package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteSubnetGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeletionMessage")
    public String deletionMessage;
    public DeleteSubnetGroupResponse withDeletionMessage(String deletionMessage) {
        this.deletionMessage = deletionMessage;
        return this;
    }
}