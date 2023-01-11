package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeOrderableDbInstanceOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeOrderableDbInstanceOptionsActionEnum action;
    public GetDescribeOrderableDbInstanceOptionsQueryParams withAction(GetDescribeOrderableDbInstanceOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceClass")
    public String dbInstanceClass;
    public GetDescribeOrderableDbInstanceOptionsQueryParams withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Engine")
    public String engine;
    public GetDescribeOrderableDbInstanceOptionsQueryParams withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineVersion")
    public String engineVersion;
    public GetDescribeOrderableDbInstanceOptionsQueryParams withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=LicenseModel")
    public String licenseModel;
    public GetDescribeOrderableDbInstanceOptionsQueryParams withLicenseModel(String licenseModel) {
        this.licenseModel = licenseModel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeOrderableDbInstanceOptionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeOrderableDbInstanceOptionsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeOrderableDbInstanceOptionsVersionEnum version;
    public GetDescribeOrderableDbInstanceOptionsQueryParams withVersion(GetDescribeOrderableDbInstanceOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Vpc")
    public Boolean vpc;
    public GetDescribeOrderableDbInstanceOptionsQueryParams withVpc(Boolean vpc) {
        this.vpc = vpc;
        return this;
    }
}