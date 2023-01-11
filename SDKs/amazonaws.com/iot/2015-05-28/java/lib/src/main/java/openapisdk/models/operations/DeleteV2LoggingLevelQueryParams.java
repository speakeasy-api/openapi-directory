package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteV2LoggingLevelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetName")
    public String targetName;
    public DeleteV2LoggingLevelQueryParams withTargetName(String targetName) {
        this.targetName = targetName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=targetType")
    public DeleteV2LoggingLevelTargetTypeEnum targetType;
    public DeleteV2LoggingLevelQueryParams withTargetType(DeleteV2LoggingLevelTargetTypeEnum targetType) {
        this.targetType = targetType;
        return this;
    }
}