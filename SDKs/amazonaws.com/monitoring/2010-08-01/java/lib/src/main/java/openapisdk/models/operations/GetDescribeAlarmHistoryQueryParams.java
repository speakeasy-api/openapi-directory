package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAlarmHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAlarmHistoryActionEnum action;
    public GetDescribeAlarmHistoryQueryParams withAction(GetDescribeAlarmHistoryActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AlarmName")
    public String alarmName;
    public GetDescribeAlarmHistoryQueryParams withAlarmName(String alarmName) {
        this.alarmName = alarmName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AlarmTypes")
    public openapisdk.models.shared.AlarmTypeEnum[] alarmTypes;
    public GetDescribeAlarmHistoryQueryParams withAlarmTypes(openapisdk.models.shared.AlarmTypeEnum[] alarmTypes) {
        this.alarmTypes = alarmTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndDate")
    public OffsetDateTime endDate;
    public GetDescribeAlarmHistoryQueryParams withEndDate(OffsetDateTime endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HistoryItemType")
    public GetDescribeAlarmHistoryHistoryItemTypeEnum historyItemType;
    public GetDescribeAlarmHistoryQueryParams withHistoryItemType(GetDescribeAlarmHistoryHistoryItemTypeEnum historyItemType) {
        this.historyItemType = historyItemType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public Long maxRecords;
    public GetDescribeAlarmHistoryQueryParams withMaxRecords(Long maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetDescribeAlarmHistoryQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ScanBy")
    public GetDescribeAlarmHistoryScanByEnum scanBy;
    public GetDescribeAlarmHistoryQueryParams withScanBy(GetDescribeAlarmHistoryScanByEnum scanBy) {
        this.scanBy = scanBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartDate")
    public OffsetDateTime startDate;
    public GetDescribeAlarmHistoryQueryParams withStartDate(OffsetDateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAlarmHistoryVersionEnum version;
    public GetDescribeAlarmHistoryQueryParams withVersion(GetDescribeAlarmHistoryVersionEnum version) {
        this.version = version;
        return this;
    }
}