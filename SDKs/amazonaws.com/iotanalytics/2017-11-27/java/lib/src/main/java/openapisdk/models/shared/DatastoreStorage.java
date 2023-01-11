package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatastoreStorage
 * Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. 
**/
public class DatastoreStorage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedS3")
    public CustomerManagedDatastoreS3Storage customerManagedS3;
    public DatastoreStorage withCustomerManagedS3(CustomerManagedDatastoreS3Storage customerManagedS3) {
        this.customerManagedS3 = customerManagedS3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotSiteWiseMultiLayerStorage")
    public DatastoreIotSiteWiseMultiLayerStorage iotSiteWiseMultiLayerStorage;
    public DatastoreStorage withIotSiteWiseMultiLayerStorage(DatastoreIotSiteWiseMultiLayerStorage iotSiteWiseMultiLayerStorage) {
        this.iotSiteWiseMultiLayerStorage = iotSiteWiseMultiLayerStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceManagedS3")
    public java.util.Map<String, Object> serviceManagedS3;
    public DatastoreStorage withServiceManagedS3(java.util.Map<String, Object> serviceManagedS3) {
        this.serviceManagedS3 = serviceManagedS3;
        return this;
    }
}