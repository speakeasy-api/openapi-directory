package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * AccessKeyLastUsed
 * <p>Contains information about the last time an Amazon Web Services access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p>
**/
public class AccessKeyLastUsed {
    public OffsetDateTime lastUsedDate;
    public AccessKeyLastUsed withLastUsedDate(OffsetDateTime lastUsedDate) {
        this.lastUsedDate = lastUsedDate;
        return this;
    }
    public String region;
    public AccessKeyLastUsed withRegion(String region) {
        this.region = region;
        return this;
    }
    public String serviceName;
    public AccessKeyLastUsed withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}