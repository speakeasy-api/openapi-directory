package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CripcRequestBodyCertificateParameters {
    @JsonProperty("INSCODE")
    public String inscode;
    public CripcRequestBodyCertificateParameters withInscode(String inscode) {
        this.inscode = inscode;
        return this;
    }
    @JsonProperty("POLNO")
    public String polno;
    public CripcRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
    @JsonProperty("STARTDT")
    public String startdt;
    public CripcRequestBodyCertificateParameters withStartdt(String startdt) {
        this.startdt = startdt;
        return this;
    }
}