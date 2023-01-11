package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IotSiteWiseCustomerManagedDatastoreS3Storage
 *  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
public class IotSiteWiseCustomerManagedDatastoreS3Storage {
    @JsonProperty("bucket")
    public String bucket;
    public IotSiteWiseCustomerManagedDatastoreS3Storage withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPrefix")
    public String keyPrefix;
    public IotSiteWiseCustomerManagedDatastoreS3Storage withKeyPrefix(String keyPrefix) {
        this.keyPrefix = keyPrefix;
        return this;
    }
}