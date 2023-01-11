package openapisdk.models.shared;



/**
 * RetrieveEnvironmentInfoResultMessage
 * Result message containing a description of the requested environment info.
**/
public class RetrieveEnvironmentInfoResultMessage {
    public EnvironmentInfoDescription[] environmentInfo;
    public RetrieveEnvironmentInfoResultMessage withEnvironmentInfo(EnvironmentInfoDescription[] environmentInfo) {
        this.environmentInfo = environmentInfo;
        return this;
    }
}