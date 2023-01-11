package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportDataSource
 * An object that has details about the source of the data that was submitted for import.
**/
public class ImportDataSource {
    @JsonProperty("dataSourceConfig")
    public ImportDataSourceConfig dataSourceConfig;
    public ImportDataSource withDataSourceConfig(ImportDataSourceConfig dataSourceConfig) {
        this.dataSourceConfig = dataSourceConfig;
        return this;
    }
}