package openapisdk.models.shared;



/**
 * MessageData
 * <p>A message returned by the <code>GetMetricData</code>API, including a code and a description.</p> <p>If a cross-Region <code>GetMetricData</code> operation fails with a code of <code>Forbidden</code> and a value of <code>Authentication too complex to retrieve cross region data</code>, you can correct the problem by running the <code>GetMetricData</code> operation in the same Region where the metric data is.</p>
**/
public class MessageData {
    public String code;
    public MessageData withCode(String code) {
        this.code = code;
        return this;
    }
    public String value;
    public MessageData withValue(String value) {
        this.value = value;
        return this;
    }
}