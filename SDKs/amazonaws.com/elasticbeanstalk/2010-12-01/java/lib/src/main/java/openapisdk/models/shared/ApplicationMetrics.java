package openapisdk.models.shared;



/**
 * ApplicationMetrics
 * Application request metrics for an AWS Elastic Beanstalk environment.
**/
public class ApplicationMetrics {
    public Long duration;
    public ApplicationMetrics withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    public Latency latency;
    public ApplicationMetrics withLatency(Latency latency) {
        this.latency = latency;
        return this;
    }
    public Long requestCount;
    public ApplicationMetrics withRequestCount(Long requestCount) {
        this.requestCount = requestCount;
        return this;
    }
    public StatusCodes statusCodes;
    public ApplicationMetrics withStatusCodes(StatusCodes statusCodes) {
        this.statusCodes = statusCodes;
        return this;
    }
}