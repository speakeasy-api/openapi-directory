package openapisdk.models.shared;



/**
 * RefreshPreferences
 * Describes the preferences for an instance refresh.
**/
public class RefreshPreferences {
    public Long checkpointDelay;
    public RefreshPreferences withCheckpointDelay(Long checkpointDelay) {
        this.checkpointDelay = checkpointDelay;
        return this;
    }
    public Long[] checkpointPercentages;
    public RefreshPreferences withCheckpointPercentages(Long[] checkpointPercentages) {
        this.checkpointPercentages = checkpointPercentages;
        return this;
    }
    public Long instanceWarmup;
    public RefreshPreferences withInstanceWarmup(Long instanceWarmup) {
        this.instanceWarmup = instanceWarmup;
        return this;
    }
    public Long minHealthyPercentage;
    public RefreshPreferences withMinHealthyPercentage(Long minHealthyPercentage) {
        this.minHealthyPercentage = minHealthyPercentage;
        return this;
    }
    public Boolean skipMatching;
    public RefreshPreferences withSkipMatching(Boolean skipMatching) {
        this.skipMatching = skipMatching;
        return this;
    }
}