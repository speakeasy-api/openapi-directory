package openapisdk.models.shared;



/**
 * GetSendQuotaResponse
 * Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.
**/
public class GetSendQuotaResponse {
    public Double max24HourSend;
    public GetSendQuotaResponse withMax24HourSend(Double max24HourSend) {
        this.max24HourSend = max24HourSend;
        return this;
    }
    public Double maxSendRate;
    public GetSendQuotaResponse withMaxSendRate(Double maxSendRate) {
        this.maxSendRate = maxSendRate;
        return this;
    }
    public Double sentLast24Hours;
    public GetSendQuotaResponse withSentLast24Hours(Double sentLast24Hours) {
        this.sentLast24Hours = sentLast24Hours;
        return this;
    }
}