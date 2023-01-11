package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LastRunErrorStatus
 * Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For information about using logging data to investigate these errors, see <a href="https://docs.aws.amazon.com/macie/latest/user/discovery-jobs-monitor-cw-logs.html">Monitoring sensitive data discovery jobs</a> in the <i>Amazon Macie User Guide</i>.
**/
public class LastRunErrorStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public LastRunErrorStatusCodeEnum code;
    public LastRunErrorStatus withCode(LastRunErrorStatusCodeEnum code) {
        this.code = code;
        return this;
    }
}