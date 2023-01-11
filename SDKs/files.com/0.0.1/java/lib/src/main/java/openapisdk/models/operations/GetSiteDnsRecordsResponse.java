package openapisdk.models.operations;



public class GetSiteDnsRecordsResponse {
    public String contentType;
    public GetSiteDnsRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DnsRecordEntity[] dnsRecordEntities;
    public GetSiteDnsRecordsResponse withDnsRecordEntities(openapisdk.models.shared.DnsRecordEntity[] dnsRecordEntities) {
        this.dnsRecordEntities = dnsRecordEntities;
        return this;
    }
    public Long statusCode;
    public GetSiteDnsRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}