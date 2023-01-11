package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConditionalSplitActivity
 * <p>Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p> <note><p>To create yes/no split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
**/
public class ConditionalSplitActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Condition")
    public Condition condition;
    public ConditionalSplitActivity withCondition(Condition condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationWaitTime")
    public WaitTime evaluationWaitTime;
    public ConditionalSplitActivity withEvaluationWaitTime(WaitTime evaluationWaitTime) {
        this.evaluationWaitTime = evaluationWaitTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FalseActivity")
    public String falseActivity;
    public ConditionalSplitActivity withFalseActivity(String falseActivity) {
        this.falseActivity = falseActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrueActivity")
    public String trueActivity;
    public ConditionalSplitActivity withTrueActivity(String trueActivity) {
        this.trueActivity = trueActivity;
        return this;
    }
}