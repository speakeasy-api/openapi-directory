package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DgcerRequestBodyCertificateParameters {
    @JsonProperty("CNAME")
    public String cname;
    public DgcerRequestBodyCertificateParameters withCname(String cname) {
        this.cname = cname;
        return this;
    }
    @JsonProperty("REGNO")
    public String regno;
    public DgcerRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
    @JsonProperty("YEAR")
    public String year;
    public DgcerRequestBodyCertificateParameters withYear(String year) {
        this.year = year;
        return this;
    }
}