package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartTableDataImportJobRequestBody {
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public StartTableDataImportJobRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("dataFormat")
    public StartTableDataImportJobRequestBodyDataFormatEnum dataFormat;
    public StartTableDataImportJobRequestBody withDataFormat(StartTableDataImportJobRequestBodyDataFormatEnum dataFormat) {
        this.dataFormat = dataFormat;
        return this;
    }
    @JsonProperty("dataSource")
    public StartTableDataImportJobRequestBodyDataSource dataSource;
    public StartTableDataImportJobRequestBody withDataSource(StartTableDataImportJobRequestBodyDataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonProperty("importOptions")
    public StartTableDataImportJobRequestBodyImportOptions importOptions;
    public StartTableDataImportJobRequestBody withImportOptions(StartTableDataImportJobRequestBodyImportOptions importOptions) {
        this.importOptions = importOptions;
        return this;
    }
}