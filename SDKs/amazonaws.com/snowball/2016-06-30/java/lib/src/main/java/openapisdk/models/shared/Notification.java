package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Notification
 * <p>The Amazon Simple Notification Service (Amazon SNS) notification settings associated with a specific job. The <code>Notification</code> object is returned as a part of the response syntax of the <code>DescribeJob</code> action in the <code>JobMetadata</code> data type.</p> <p>When the notification settings are defined during job creation, you can choose to notify based on a specific set of job states using the <code>JobStatesToNotify</code> array of strings, or you can specify that you want to have Amazon SNS notifications sent out for all job states with <code>NotifyAll</code> set to true.</p>
**/
public class Notification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatesToNotify")
    public JobStateEnum[] jobStatesToNotify;
    public Notification withJobStatesToNotify(JobStateEnum[] jobStatesToNotify) {
        this.jobStatesToNotify = jobStatesToNotify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotifyAll")
    public Boolean notifyAll;
    public Notification withNotifyAll(Boolean notifyAll) {
        this.notifyAll = notifyAll;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicARN")
    public String snsTopicARN;
    public Notification withSnsTopicArn(String snsTopicARN) {
        this.snsTopicARN = snsTopicARN;
        return this;
    }
}