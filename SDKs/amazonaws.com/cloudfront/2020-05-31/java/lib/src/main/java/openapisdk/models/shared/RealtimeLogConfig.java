package openapisdk.models.shared;



/**
 * RealtimeLogConfig
 * A real-time log configuration.
**/
public class RealtimeLogConfig {
    public String arn;
    public RealtimeLogConfig withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public EndPoint[] endPoints;
    public RealtimeLogConfig withEndPoints(EndPoint[] endPoints) {
        this.endPoints = endPoints;
        return this;
    }
    public java.util.Map<String, Object>[] fields;
    public RealtimeLogConfig withFields(java.util.Map<String, Object>[] fields) {
        this.fields = fields;
        return this;
    }
    public String name;
    public RealtimeLogConfig withName(String name) {
        this.name = name;
        return this;
    }
    public Long samplingRate;
    public RealtimeLogConfig withSamplingRate(Long samplingRate) {
        this.samplingRate = samplingRate;
        return this;
    }
}