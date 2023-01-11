package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Communication
 * A communication associated with a support case. The communication consists of the case ID, the message body, attachment information, the submitter of the communication, and the date and time of the communication.
**/
public class Communication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentSet")
    public AttachmentDetails[] attachmentSet;
    public Communication withAttachmentSet(AttachmentDetails[] attachmentSet) {
        this.attachmentSet = attachmentSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public Communication withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseId")
    public String caseId;
    public Communication withCaseId(String caseId) {
        this.caseId = caseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submittedBy")
    public String submittedBy;
    public Communication withSubmittedBy(String submittedBy) {
        this.submittedBy = submittedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeCreated")
    public String timeCreated;
    public Communication withTimeCreated(String timeCreated) {
        this.timeCreated = timeCreated;
        return this;
    }
}