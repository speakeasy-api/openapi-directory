package openapisdk.models.shared;



/**
 * ScalingConfigurationInfo
 * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
**/
public class ScalingConfigurationInfo {
    public Boolean autoPause;
    public ScalingConfigurationInfo withAutoPause(Boolean autoPause) {
        this.autoPause = autoPause;
        return this;
    }
    public Long maxCapacity;
    public ScalingConfigurationInfo withMaxCapacity(Long maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    public Long minCapacity;
    public ScalingConfigurationInfo withMinCapacity(Long minCapacity) {
        this.minCapacity = minCapacity;
        return this;
    }
    public Long secondsBeforeTimeout;
    public ScalingConfigurationInfo withSecondsBeforeTimeout(Long secondsBeforeTimeout) {
        this.secondsBeforeTimeout = secondsBeforeTimeout;
        return this;
    }
    public Long secondsUntilAutoPause;
    public ScalingConfigurationInfo withSecondsUntilAutoPause(Long secondsUntilAutoPause) {
        this.secondsUntilAutoPause = secondsUntilAutoPause;
        return this;
    }
    public String timeoutAction;
    public ScalingConfigurationInfo withTimeoutAction(String timeoutAction) {
        this.timeoutAction = timeoutAction;
        return this;
    }
}