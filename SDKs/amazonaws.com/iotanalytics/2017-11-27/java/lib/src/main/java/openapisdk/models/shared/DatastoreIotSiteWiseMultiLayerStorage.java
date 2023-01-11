package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DatastoreIotSiteWiseMultiLayerStorage
 *  Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
public class DatastoreIotSiteWiseMultiLayerStorage {
    @JsonProperty("customerManagedS3Storage")
    public IotSiteWiseCustomerManagedDatastoreS3Storage customerManagedS3Storage;
    public DatastoreIotSiteWiseMultiLayerStorage withCustomerManagedS3Storage(IotSiteWiseCustomerManagedDatastoreS3Storage customerManagedS3Storage) {
        this.customerManagedS3Storage = customerManagedS3Storage;
        return this;
    }
}