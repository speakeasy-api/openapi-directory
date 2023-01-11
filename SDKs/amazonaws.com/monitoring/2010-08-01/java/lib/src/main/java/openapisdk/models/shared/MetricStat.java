package openapisdk.models.shared;



/**
 * MetricStat
 * This structure defines the metric to be returned, along with the statistics, period, and units.
**/
public class MetricStat {
    public Metric metric;
    public MetricStat withMetric(Metric metric) {
        this.metric = metric;
        return this;
    }
    public Long period;
    public MetricStat withPeriod(Long period) {
        this.period = period;
        return this;
    }
    public String stat;
    public MetricStat withStat(String stat) {
        this.stat = stat;
        return this;
    }
    public StandardUnitEnum unit;
    public MetricStat withUnit(StandardUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}