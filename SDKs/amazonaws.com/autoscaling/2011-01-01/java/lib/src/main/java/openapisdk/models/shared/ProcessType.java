package openapisdk.models.shared;



/**
 * ProcessType
 * <p>Describes a process type.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
**/
public class ProcessType {
    public String processName;
    public ProcessType withProcessName(String processName) {
        this.processName = processName;
        return this;
    }
}