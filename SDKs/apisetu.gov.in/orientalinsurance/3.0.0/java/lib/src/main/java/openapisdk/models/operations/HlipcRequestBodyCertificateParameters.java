package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HlipcRequestBodyCertificateParameters {
    @JsonProperty("INSCODE")
    public String inscode;
    public HlipcRequestBodyCertificateParameters withInscode(String inscode) {
        this.inscode = inscode;
        return this;
    }
    @JsonProperty("POLNO")
    public String polno;
    public HlipcRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
    @JsonProperty("STARTDT")
    public String startdt;
    public HlipcRequestBodyCertificateParameters withStartdt(String startdt) {
        this.startdt = startdt;
        return this;
    }
}