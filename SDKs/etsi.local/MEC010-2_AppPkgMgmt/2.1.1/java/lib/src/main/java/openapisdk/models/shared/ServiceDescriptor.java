package openapisdk.models.shared;



/**
 * ServiceDescriptor
 * 'The ServiceDescriptor data type describes a MEC service produced by a service-providing MEC application.'
**/
public class ServiceDescriptor {
    public Object serCategory;
    public ServiceDescriptor withSerCategory(Object serCategory) {
        this.serCategory = serCategory;
        return this;
    }
    public String serName;
    public ServiceDescriptor withSerName(String serName) {
        this.serName = serName;
        return this;
    }
    public TransportsSupported transportsSupported;
    public ServiceDescriptor withTransportsSupported(TransportsSupported transportsSupported) {
        this.transportsSupported = transportsSupported;
        return this;
    }
    public String version;
    public ServiceDescriptor withVersion(String version) {
        this.version = version;
        return this;
    }
}