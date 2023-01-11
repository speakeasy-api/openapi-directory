package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PripcRequestBodyCertificateParameters {
    @JsonProperty("INSCODE")
    public String inscode;
    public PripcRequestBodyCertificateParameters withInscode(String inscode) {
        this.inscode = inscode;
        return this;
    }
    @JsonProperty("POLNO")
    public String polno;
    public PripcRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
    @JsonProperty("STARTDT")
    public String startdt;
    public PripcRequestBodyCertificateParameters withStartdt(String startdt) {
        this.startdt = startdt;
        return this;
    }
}