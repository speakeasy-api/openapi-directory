package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccountSendingAttributesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendingEnabled")
    public Boolean sendingEnabled;
    public PutAccountSendingAttributesRequestBody withSendingEnabled(Boolean sendingEnabled) {
        this.sendingEnabled = sendingEnabled;
        return this;
    }
}