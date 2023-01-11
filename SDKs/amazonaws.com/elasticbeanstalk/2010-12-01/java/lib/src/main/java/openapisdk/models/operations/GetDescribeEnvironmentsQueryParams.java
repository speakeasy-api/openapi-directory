package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeEnvironmentsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeEnvironmentsActionEnum action;
    public GetDescribeEnvironmentsQueryParams withAction(GetDescribeEnvironmentsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplicationName")
    public String applicationName;
    public GetDescribeEnvironmentsQueryParams withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentIds")
    public String[] environmentIds;
    public GetDescribeEnvironmentsQueryParams withEnvironmentIds(String[] environmentIds) {
        this.environmentIds = environmentIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EnvironmentNames")
    public String[] environmentNames;
    public GetDescribeEnvironmentsQueryParams withEnvironmentNames(String[] environmentNames) {
        this.environmentNames = environmentNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludeDeleted")
    public Boolean includeDeleted;
    public GetDescribeEnvironmentsQueryParams withIncludeDeleted(Boolean includeDeleted) {
        this.includeDeleted = includeDeleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IncludedDeletedBackTo")
    public OffsetDateTime includedDeletedBackTo;
    public GetDescribeEnvironmentsQueryParams withIncludedDeletedBackTo(OffsetDateTime includedDeletedBackTo) {
        this.includedDeletedBackTo = includedDeletedBackTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeEnvironmentsQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeEnvironmentsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeEnvironmentsVersionEnum version;
    public GetDescribeEnvironmentsQueryParams withVersion(GetDescribeEnvironmentsVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VersionLabel")
    public String versionLabel;
    public GetDescribeEnvironmentsQueryParams withVersionLabel(String versionLabel) {
        this.versionLabel = versionLabel;
        return this;
    }
}