package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransferCertificateResponse
 * The output from the TransferCertificate operation.
**/
public class TransferCertificateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferredCertificateArn")
    public String transferredCertificateArn;
    public TransferCertificateResponse withTransferredCertificateArn(String transferredCertificateArn) {
        this.transferredCertificateArn = transferredCertificateArn;
        return this;
    }
}