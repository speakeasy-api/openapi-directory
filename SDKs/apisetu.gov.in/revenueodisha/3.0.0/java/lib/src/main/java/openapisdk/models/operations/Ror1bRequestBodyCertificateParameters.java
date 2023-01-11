package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Ror1bRequestBodyCertificateParameters {
    @JsonProperty("khatano")
    public String khatano;
    public Ror1bRequestBodyCertificateParameters withKhatano(String khatano) {
        this.khatano = khatano;
        return this;
    }
    @JsonProperty("level1")
    public String level1;
    public Ror1bRequestBodyCertificateParameters withLevel1(String level1) {
        this.level1 = level1;
        return this;
    }
    @JsonProperty("level2")
    public String level2;
    public Ror1bRequestBodyCertificateParameters withLevel2(String level2) {
        this.level2 = level2;
        return this;
    }
    @JsonProperty("level3")
    public String level3;
    public Ror1bRequestBodyCertificateParameters withLevel3(String level3) {
        this.level3 = level3;
        return this;
    }
}