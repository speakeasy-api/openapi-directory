package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IotSiteWiseCustomerManagedDatastoreS3StorageSummary
 *  Contains information about the data store that you manage, which stores data used by IoT SiteWise. 
**/
public class IotSiteWiseCustomerManagedDatastoreS3StorageSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public IotSiteWiseCustomerManagedDatastoreS3StorageSummary withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPrefix")
    public String keyPrefix;
    public IotSiteWiseCustomerManagedDatastoreS3StorageSummary withKeyPrefix(String keyPrefix) {
        this.keyPrefix = keyPrefix;
        return this;
    }
}