package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RpcerRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public RpcerRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("RegistrationNo")
    public String registrationNo;
    public RpcerRequestBodyCertificateParameters withRegistrationNo(String registrationNo) {
        this.registrationNo = registrationNo;
        return this;
    }
}