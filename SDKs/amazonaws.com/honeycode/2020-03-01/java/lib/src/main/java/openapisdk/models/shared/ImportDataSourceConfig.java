package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportDataSourceConfig
 *  An object that contains the configuration parameters for the data source of an import request. 
**/
public class ImportDataSourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceUrl")
    public String dataSourceUrl;
    public ImportDataSourceConfig withDataSourceUrl(String dataSourceUrl) {
        this.dataSourceUrl = dataSourceUrl;
        return this;
    }
}