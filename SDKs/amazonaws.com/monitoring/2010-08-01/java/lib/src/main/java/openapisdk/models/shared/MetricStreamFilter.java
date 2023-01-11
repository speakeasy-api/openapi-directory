package openapisdk.models.shared;



/**
 * MetricStreamFilter
 * This structure contains the name of one of the metric namespaces that is listed in a filter of a metric stream.
**/
public class MetricStreamFilter {
    public String namespace;
    public MetricStreamFilter withNamespace(String namespace) {
        this.namespace = namespace;
        return this;
    }
}