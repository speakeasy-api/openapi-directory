package openapisdk.models.operations;



public class GetDnsRecordsResponse {
    public String contentType;
    public GetDnsRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DnsRecordEntity[] dnsRecordEntities;
    public GetDnsRecordsResponse withDnsRecordEntities(openapisdk.models.shared.DnsRecordEntity[] dnsRecordEntities) {
        this.dnsRecordEntities = dnsRecordEntities;
        return this;
    }
    public Long statusCode;
    public GetDnsRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}