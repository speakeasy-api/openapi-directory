package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class IlpmtRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public IlpmtRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("UID")
    public String uid;
    public IlpmtRequestBodyCertificateParameters withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonProperty("eILPAppId")
    public String eILPAppId;
    public IlpmtRequestBodyCertificateParameters withEIlpAppId(String eILPAppId) {
        this.eILPAppId = eILPAppId;
        return this;
    }
    @JsonProperty("eILPContactNumber")
    public String eILPContactNumber;
    public IlpmtRequestBodyCertificateParameters withEIlpContactNumber(String eILPContactNumber) {
        this.eILPContactNumber = eILPContactNumber;
        return this;
    }
}