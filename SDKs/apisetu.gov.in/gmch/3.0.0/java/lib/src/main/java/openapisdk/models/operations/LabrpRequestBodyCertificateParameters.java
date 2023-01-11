package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LabrpRequestBodyCertificateParameters {
    @JsonProperty("FullName")
    public String fullName;
    public LabrpRequestBodyCertificateParameters withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonProperty("reportdate")
    public String reportdate;
    public LabrpRequestBodyCertificateParameters withReportdate(String reportdate) {
        this.reportdate = reportdate;
        return this;
    }
    @JsonProperty("uhid")
    public String uhid;
    public LabrpRequestBodyCertificateParameters withUhid(String uhid) {
        this.uhid = uhid;
        return this;
    }
}