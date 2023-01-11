package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListClassesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public ListClassesStateEnum state;
    public ListClassesQueryParams withState(ListClassesStateEnum state) {
        this.state = state;
        return this;
    }
}