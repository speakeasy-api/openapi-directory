package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BtcerRequestBodyCertificateParameters {
    @JsonProperty("DATEOFBIRTH")
    public String dateofbirth;
    public BtcerRequestBodyCertificateParameters withDateofbirth(String dateofbirth) {
        this.dateofbirth = dateofbirth;
        return this;
    }
    @JsonProperty("REGNO")
    public String regno;
    public BtcerRequestBodyCertificateParameters withRegno(String regno) {
        this.regno = regno;
        return this;
    }
}