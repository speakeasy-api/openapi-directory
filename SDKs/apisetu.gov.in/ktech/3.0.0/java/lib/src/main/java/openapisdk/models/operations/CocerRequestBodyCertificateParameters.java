package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CocerRequestBodyCertificateParameters {
    @JsonProperty("cert_type")
    public String certType;
    public CocerRequestBodyCertificateParameters withCertType(String certType) {
        this.certType = certType;
        return this;
    }
    @JsonProperty("company_name")
    public String companyName;
    public CocerRequestBodyCertificateParameters withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonProperty("reg_no")
    public String regNo;
    public CocerRequestBodyCertificateParameters withRegNo(String regNo) {
        this.regNo = regNo;
        return this;
    }
    @JsonProperty("sector")
    public String sector;
    public CocerRequestBodyCertificateParameters withSector(String sector) {
        this.sector = sector;
        return this;
    }
}