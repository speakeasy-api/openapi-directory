// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type OpsItemFilterKeyEnum string

const (
	OpsItemFilterKeyEnumStatus                              OpsItemFilterKeyEnum = "Status"
	OpsItemFilterKeyEnumCreatedBy                           OpsItemFilterKeyEnum = "CreatedBy"
	OpsItemFilterKeyEnumSource                              OpsItemFilterKeyEnum = "Source"
	OpsItemFilterKeyEnumPriority                            OpsItemFilterKeyEnum = "Priority"
	OpsItemFilterKeyEnumTitle                               OpsItemFilterKeyEnum = "Title"
	OpsItemFilterKeyEnumOpsItemID                           OpsItemFilterKeyEnum = "OpsItemId"
	OpsItemFilterKeyEnumCreatedTime                         OpsItemFilterKeyEnum = "CreatedTime"
	OpsItemFilterKeyEnumLastModifiedTime                    OpsItemFilterKeyEnum = "LastModifiedTime"
	OpsItemFilterKeyEnumActualStartTime                     OpsItemFilterKeyEnum = "ActualStartTime"
	OpsItemFilterKeyEnumActualEndTime                       OpsItemFilterKeyEnum = "ActualEndTime"
	OpsItemFilterKeyEnumPlannedStartTime                    OpsItemFilterKeyEnum = "PlannedStartTime"
	OpsItemFilterKeyEnumPlannedEndTime                      OpsItemFilterKeyEnum = "PlannedEndTime"
	OpsItemFilterKeyEnumOperationalData                     OpsItemFilterKeyEnum = "OperationalData"
	OpsItemFilterKeyEnumOperationalDataKey                  OpsItemFilterKeyEnum = "OperationalDataKey"
	OpsItemFilterKeyEnumOperationalDataValue                OpsItemFilterKeyEnum = "OperationalDataValue"
	OpsItemFilterKeyEnumResourceID                          OpsItemFilterKeyEnum = "ResourceId"
	OpsItemFilterKeyEnumAutomationID                        OpsItemFilterKeyEnum = "AutomationId"
	OpsItemFilterKeyEnumCategory                            OpsItemFilterKeyEnum = "Category"
	OpsItemFilterKeyEnumSeverity                            OpsItemFilterKeyEnum = "Severity"
	OpsItemFilterKeyEnumOpsItemType                         OpsItemFilterKeyEnum = "OpsItemType"
	OpsItemFilterKeyEnumChangeRequestByRequesterArn         OpsItemFilterKeyEnum = "ChangeRequestByRequesterArn"
	OpsItemFilterKeyEnumChangeRequestByRequesterName        OpsItemFilterKeyEnum = "ChangeRequestByRequesterName"
	OpsItemFilterKeyEnumChangeRequestByApproverArn          OpsItemFilterKeyEnum = "ChangeRequestByApproverArn"
	OpsItemFilterKeyEnumChangeRequestByApproverName         OpsItemFilterKeyEnum = "ChangeRequestByApproverName"
	OpsItemFilterKeyEnumChangeRequestByTemplate             OpsItemFilterKeyEnum = "ChangeRequestByTemplate"
	OpsItemFilterKeyEnumChangeRequestByTargetsResourceGroup OpsItemFilterKeyEnum = "ChangeRequestByTargetsResourceGroup"
	OpsItemFilterKeyEnumInsightByType                       OpsItemFilterKeyEnum = "InsightByType"
	OpsItemFilterKeyEnumAccountID                           OpsItemFilterKeyEnum = "AccountId"
)

func (e OpsItemFilterKeyEnum) ToPointer() *OpsItemFilterKeyEnum {
	return &e
}

func (e *OpsItemFilterKeyEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Status":
		fallthrough
	case "CreatedBy":
		fallthrough
	case "Source":
		fallthrough
	case "Priority":
		fallthrough
	case "Title":
		fallthrough
	case "OpsItemId":
		fallthrough
	case "CreatedTime":
		fallthrough
	case "LastModifiedTime":
		fallthrough
	case "ActualStartTime":
		fallthrough
	case "ActualEndTime":
		fallthrough
	case "PlannedStartTime":
		fallthrough
	case "PlannedEndTime":
		fallthrough
	case "OperationalData":
		fallthrough
	case "OperationalDataKey":
		fallthrough
	case "OperationalDataValue":
		fallthrough
	case "ResourceId":
		fallthrough
	case "AutomationId":
		fallthrough
	case "Category":
		fallthrough
	case "Severity":
		fallthrough
	case "OpsItemType":
		fallthrough
	case "ChangeRequestByRequesterArn":
		fallthrough
	case "ChangeRequestByRequesterName":
		fallthrough
	case "ChangeRequestByApproverArn":
		fallthrough
	case "ChangeRequestByApproverName":
		fallthrough
	case "ChangeRequestByTemplate":
		fallthrough
	case "ChangeRequestByTargetsResourceGroup":
		fallthrough
	case "InsightByType":
		fallthrough
	case "AccountId":
		*e = OpsItemFilterKeyEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for OpsItemFilterKeyEnum: %v", v)
	}
}
