package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EgipcRequestBodyCertificateParameters {
    @JsonProperty("INSCODE")
    public String inscode;
    public EgipcRequestBodyCertificateParameters withInscode(String inscode) {
        this.inscode = inscode;
        return this;
    }
    @JsonProperty("POLNO")
    public String polno;
    public EgipcRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
    @JsonProperty("STARTDT")
    public String startdt;
    public EgipcRequestBodyCertificateParameters withStartdt(String startdt) {
        this.startdt = startdt;
        return this;
    }
}