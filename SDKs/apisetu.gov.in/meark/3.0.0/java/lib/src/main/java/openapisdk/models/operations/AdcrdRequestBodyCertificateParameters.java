package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AdcrdRequestBodyCertificateParameters {
    @JsonProperty("DOB")
    public String dob;
    public AdcrdRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("PrnNo")
    public String prnNo;
    public AdcrdRequestBodyCertificateParameters withPrnNo(String prnNo) {
        this.prnNo = prnNo;
        return this;
    }
    @JsonProperty("RequestId")
    public String requestId;
    public AdcrdRequestBodyCertificateParameters withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}