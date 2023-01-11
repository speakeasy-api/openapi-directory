package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MripcRequestBodyCertificateParameters {
    @JsonProperty("INSCODE")
    public String inscode;
    public MripcRequestBodyCertificateParameters withInscode(String inscode) {
        this.inscode = inscode;
        return this;
    }
    @JsonProperty("POLNO")
    public String polno;
    public MripcRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
    @JsonProperty("STARTDT")
    public String startdt;
    public MripcRequestBodyCertificateParameters withStartdt(String startdt) {
        this.startdt = startdt;
        return this;
    }
}