package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TripcRequestBodyCertificateParameters {
    @JsonProperty("INSCODE")
    public String inscode;
    public TripcRequestBodyCertificateParameters withInscode(String inscode) {
        this.inscode = inscode;
        return this;
    }
    @JsonProperty("POLNO")
    public String polno;
    public TripcRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
    @JsonProperty("STARTDT")
    public String startdt;
    public TripcRequestBodyCertificateParameters withStartdt(String startdt) {
        this.startdt = startdt;
        return this;
    }
}