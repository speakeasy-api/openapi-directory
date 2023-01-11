package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TdcerRequestBodyCertificateParameters {
    @JsonProperty("CustID")
    public String custID;
    public TdcerRequestBodyCertificateParameters withCustId(String custID) {
        this.custID = custID;
        return this;
    }
    @JsonProperty("DOB")
    public String dob;
    public TdcerRequestBodyCertificateParameters withDob(String dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("finYr")
    public String finYr;
    public TdcerRequestBodyCertificateParameters withFinYr(String finYr) {
        this.finYr = finYr;
        return this;
    }
}