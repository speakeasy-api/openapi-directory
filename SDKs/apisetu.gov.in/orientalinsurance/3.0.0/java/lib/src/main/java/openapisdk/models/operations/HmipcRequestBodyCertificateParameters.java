package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HmipcRequestBodyCertificateParameters {
    @JsonProperty("INSCODE")
    public String inscode;
    public HmipcRequestBodyCertificateParameters withInscode(String inscode) {
        this.inscode = inscode;
        return this;
    }
    @JsonProperty("POLNO")
    public String polno;
    public HmipcRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
    @JsonProperty("STARTDT")
    public String startdt;
    public HmipcRequestBodyCertificateParameters withStartdt(String startdt) {
        this.startdt = startdt;
        return this;
    }
}