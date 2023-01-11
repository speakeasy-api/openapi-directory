package openapisdk.models.operations;



public class GetTimeSeriesServiceStatisticsResponse {
    public String contentType;
    public GetTimeSeriesServiceStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTimeSeriesServiceStatisticsResult getTimeSeriesServiceStatisticsResult;
    public GetTimeSeriesServiceStatisticsResponse withGetTimeSeriesServiceStatisticsResult(openapisdk.models.shared.GetTimeSeriesServiceStatisticsResult getTimeSeriesServiceStatisticsResult) {
        this.getTimeSeriesServiceStatisticsResult = getTimeSeriesServiceStatisticsResult;
        return this;
    }
    public Object invalidRequestException;
    public GetTimeSeriesServiceStatisticsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetTimeSeriesServiceStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetTimeSeriesServiceStatisticsResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}