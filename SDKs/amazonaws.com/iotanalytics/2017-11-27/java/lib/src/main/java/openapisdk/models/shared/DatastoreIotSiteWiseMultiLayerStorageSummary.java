package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatastoreIotSiteWiseMultiLayerStorageSummary
 *  Contains information about the data store that you manage, which stores data used by IoT SiteWise. 
**/
public class DatastoreIotSiteWiseMultiLayerStorageSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedS3Storage")
    public IotSiteWiseCustomerManagedDatastoreS3StorageSummary customerManagedS3Storage;
    public DatastoreIotSiteWiseMultiLayerStorageSummary withCustomerManagedS3Storage(IotSiteWiseCustomerManagedDatastoreS3StorageSummary customerManagedS3Storage) {
        this.customerManagedS3Storage = customerManagedS3Storage;
        return this;
    }
}