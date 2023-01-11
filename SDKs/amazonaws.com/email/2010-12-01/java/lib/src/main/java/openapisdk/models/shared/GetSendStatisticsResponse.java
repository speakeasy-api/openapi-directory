package openapisdk.models.shared;



/**
 * GetSendStatisticsResponse
 * Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.
**/
public class GetSendStatisticsResponse {
    public SendDataPoint[] sendDataPoints;
    public GetSendStatisticsResponse withSendDataPoints(SendDataPoint[] sendDataPoints) {
        this.sendDataPoints = sendDataPoints;
        return this;
    }
}