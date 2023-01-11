package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartTableDataImportJobRequestBodyDataSource
 * An object that has details about the source of the data that was submitted for import.
**/
public class StartTableDataImportJobRequestBodyDataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceConfig")
    public openapisdk.models.shared.ImportDataSourceConfig dataSourceConfig;
    public StartTableDataImportJobRequestBodyDataSource withDataSourceConfig(openapisdk.models.shared.ImportDataSourceConfig dataSourceConfig) {
        this.dataSourceConfig = dataSourceConfig;
        return this;
    }
}