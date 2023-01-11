package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PodocRequestBodyCertificateParameters {
    @JsonProperty("INSCODE")
    public String inscode;
    public PodocRequestBodyCertificateParameters withInscode(String inscode) {
        this.inscode = inscode;
        return this;
    }
    @JsonProperty("POLNO")
    public String polno;
    public PodocRequestBodyCertificateParameters withPolno(String polno) {
        this.polno = polno;
        return this;
    }
    @JsonProperty("STARTDT")
    public String startdt;
    public PodocRequestBodyCertificateParameters withStartdt(String startdt) {
        this.startdt = startdt;
        return this;
    }
}