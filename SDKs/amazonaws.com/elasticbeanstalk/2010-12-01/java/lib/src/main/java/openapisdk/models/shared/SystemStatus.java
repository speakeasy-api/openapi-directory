package openapisdk.models.shared;



/**
 * SystemStatus
 * CPU utilization and load average metrics for an Amazon EC2 instance.
**/
public class SystemStatus {
    public CpuUtilization cpuUtilization;
    public SystemStatus withCpuUtilization(CpuUtilization cpuUtilization) {
        this.cpuUtilization = cpuUtilization;
        return this;
    }
    public Double[] loadAverage;
    public SystemStatus withLoadAverage(Double[] loadAverage) {
        this.loadAverage = loadAverage;
        return this;
    }
}