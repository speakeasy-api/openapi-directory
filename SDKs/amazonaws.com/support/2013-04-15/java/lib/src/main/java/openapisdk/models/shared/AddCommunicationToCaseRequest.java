package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddCommunicationToCaseRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentSetId")
    public String attachmentSetId;
    public AddCommunicationToCaseRequest withAttachmentSetId(String attachmentSetId) {
        this.attachmentSetId = attachmentSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseId")
    public String caseId;
    public AddCommunicationToCaseRequest withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccEmailAddresses")
    public String[] ccEmailAddresses;
    public AddCommunicationToCaseRequest withCcEmailAddresses(String[] ccEmailAddresses) {
        this.ccEmailAddresses = ccEmailAddresses;
        return this;
    }
    @JsonProperty("communicationBody")
    public String communicationBody;
    public AddCommunicationToCaseRequest withCommunicationBody(String communicationBody) {
        this.communicationBody = communicationBody;
        return this;
    }
}