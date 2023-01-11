package openapisdk.models.shared;



/**
 * CpuUtilization
 * CPU utilization metrics for an instance.
**/
public class CpuUtilization {
    public Double ioWait;
    public CpuUtilization withIoWait(Double ioWait) {
        this.ioWait = ioWait;
        return this;
    }
    public Double irq;
    public CpuUtilization withIrq(Double irq) {
        this.irq = irq;
        return this;
    }
    public Double idle;
    public CpuUtilization withIdle(Double idle) {
        this.idle = idle;
        return this;
    }
    public Double nice;
    public CpuUtilization withNice(Double nice) {
        this.nice = nice;
        return this;
    }
    public Double privileged;
    public CpuUtilization withPrivileged(Double privileged) {
        this.privileged = privileged;
        return this;
    }
    public Double softIRQ;
    public CpuUtilization withSoftIrq(Double softIRQ) {
        this.softIRQ = softIRQ;
        return this;
    }
    public Double system;
    public CpuUtilization withSystem(Double system) {
        this.system = system;
        return this;
    }
    public Double user;
    public CpuUtilization withUser(Double user) {
        this.user = user;
        return this;
    }
}