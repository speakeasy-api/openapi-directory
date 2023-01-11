package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompanyIdDatasetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=dataset")
    public CompanyIdDatasetDatasetEnum dataset;
    public CompanyIdDatasetPathParams withDataset(CompanyIdDatasetDatasetEnum dataset) {
        this.dataset = dataset;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CompanyIdDatasetPathParams withId(String id) {
        this.id = id;
        return this;
    }
}