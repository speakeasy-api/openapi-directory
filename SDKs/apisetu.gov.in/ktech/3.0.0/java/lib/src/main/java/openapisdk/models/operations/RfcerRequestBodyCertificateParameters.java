package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RfcerRequestBodyCertificateParameters {
    @JsonProperty("cert_type")
    public String certType;
    public RfcerRequestBodyCertificateParameters withCertType(String certType) {
        this.certType = certType;
        return this;
    }
    @JsonProperty("company_name")
    public String companyName;
    public RfcerRequestBodyCertificateParameters withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonProperty("reg_no")
    public String regNo;
    public RfcerRequestBodyCertificateParameters withRegNo(String regNo) {
        this.regNo = regNo;
        return this;
    }
    @JsonProperty("sector")
    public String sector;
    public RfcerRequestBodyCertificateParameters withSector(String sector) {
        this.sector = sector;
        return this;
    }
}