package openapisdk.models.shared;



public class TrafficRuleDescriptor {
    public ActionEnum action;
    public TrafficRuleDescriptor withAction(ActionEnum action) {
        this.action = action;
        return this;
    }
    public InterfaceDescriptor[] dstInterface;
    public TrafficRuleDescriptor withDstInterface(InterfaceDescriptor[] dstInterface) {
        this.dstInterface = dstInterface;
        return this;
    }
    public FilterTypeEnum filterType;
    public TrafficRuleDescriptor withFilterType(FilterTypeEnum filterType) {
        this.filterType = filterType;
        return this;
    }
    public Long priority;
    public TrafficRuleDescriptor withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    public TrafficFilter[] trafficFilter;
    public TrafficRuleDescriptor withTrafficFilter(TrafficFilter[] trafficFilter) {
        this.trafficFilter = trafficFilter;
        return this;
    }
    public String trafficRuleId;
    public TrafficRuleDescriptor withTrafficRuleId(String trafficRuleId) {
        this.trafficRuleId = trafficRuleId;
        return this;
    }
}