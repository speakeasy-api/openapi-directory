package openapisdk.models.shared;



/**
 * Latency
 * Represents the average latency for the slowest X percent of requests over the last 10 seconds.
**/
public class Latency {
    public Double p10;
    public Latency withP10(Double p10) {
        this.p10 = p10;
        return this;
    }
    public Double p50;
    public Latency withP50(Double p50) {
        this.p50 = p50;
        return this;
    }
    public Double p75;
    public Latency withP75(Double p75) {
        this.p75 = p75;
        return this;
    }
    public Double p85;
    public Latency withP85(Double p85) {
        this.p85 = p85;
        return this;
    }
    public Double p90;
    public Latency withP90(Double p90) {
        this.p90 = p90;
        return this;
    }
    public Double p95;
    public Latency withP95(Double p95) {
        this.p95 = p95;
        return this;
    }
    public Double p99;
    public Latency withP99(Double p99) {
        this.p99 = p99;
        return this;
    }
    public Double p999;
    public Latency withP999(Double p999) {
        this.p999 = p999;
        return this;
    }
}