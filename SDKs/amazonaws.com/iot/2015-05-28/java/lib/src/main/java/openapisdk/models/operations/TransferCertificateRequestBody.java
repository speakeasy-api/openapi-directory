package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransferCertificateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferMessage")
    public String transferMessage;
    public TransferCertificateRequestBody withTransferMessage(String transferMessage) {
        this.transferMessage = transferMessage;
        return this;
    }
}