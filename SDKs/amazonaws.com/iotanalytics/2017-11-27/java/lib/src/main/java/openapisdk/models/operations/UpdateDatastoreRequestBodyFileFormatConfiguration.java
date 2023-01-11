package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDatastoreRequestBodyFileFormatConfiguration
 * <p>Contains the configuration information of file formats. IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p> <p>The default file format is JSON. You can specify only one format.</p> <p>You can't change the file format after you create the data store.</p>
**/
public class UpdateDatastoreRequestBodyFileFormatConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jsonConfiguration")
    public java.util.Map<String, Object> jsonConfiguration;
    public UpdateDatastoreRequestBodyFileFormatConfiguration withJsonConfiguration(java.util.Map<String, Object> jsonConfiguration) {
        this.jsonConfiguration = jsonConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parquetConfiguration")
    public openapisdk.models.shared.ParquetConfiguration parquetConfiguration;
    public UpdateDatastoreRequestBodyFileFormatConfiguration withParquetConfiguration(openapisdk.models.shared.ParquetConfiguration parquetConfiguration) {
        this.parquetConfiguration = parquetConfiguration;
        return this;
    }
}