package openapisdk.models.shared;



/**
 * DbInstanceStatusInfoList
 * Provides a list of status information for an instance.
**/
public class DbInstanceStatusInfoList {
    public String message;
    public DbInstanceStatusInfoList withMessage(String message) {
        this.message = message;
        return this;
    }
    public Boolean normal;
    public DbInstanceStatusInfoList withNormal(Boolean normal) {
        this.normal = normal;
        return this;
    }
    public String status;
    public DbInstanceStatusInfoList withStatus(String status) {
        this.status = status;
        return this;
    }
    public String statusType;
    public DbInstanceStatusInfoList withStatusType(String statusType) {
        this.statusType = statusType;
        return this;
    }
}