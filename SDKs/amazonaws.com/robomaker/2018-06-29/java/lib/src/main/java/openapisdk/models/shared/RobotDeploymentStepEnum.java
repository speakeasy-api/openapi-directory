package openapisdk.models.shared;


public enum RobotDeploymentStepEnum {
    VALIDATING("Validating"),
    DOWNLOADING_EXTRACTING("DownloadingExtracting"),
    EXECUTING_DOWNLOAD_CONDITION("ExecutingDownloadCondition"),
    EXECUTING_PRE_LAUNCH("ExecutingPreLaunch"),
    LAUNCHING("Launching"),
    EXECUTING_POST_LAUNCH("ExecutingPostLaunch"),
    FINISHED("Finished");

    public final String value;

    private RobotDeploymentStepEnum(String value) {
        this.value = value;
    }
}
