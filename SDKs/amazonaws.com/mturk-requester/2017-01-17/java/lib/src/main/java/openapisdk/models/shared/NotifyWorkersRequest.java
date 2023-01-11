package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NotifyWorkersRequest {
    @JsonProperty("MessageText")
    public String messageText;
    public NotifyWorkersRequest withMessageText(String messageText) {
        this.messageText = messageText;
        return this;
    }
    @JsonProperty("Subject")
    public String subject;
    public NotifyWorkersRequest withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonProperty("WorkerIds")
    public String[] workerIds;
    public NotifyWorkersRequest withWorkerIds(String[] workerIds) {
        this.workerIds = workerIds;
        return this;
    }
}