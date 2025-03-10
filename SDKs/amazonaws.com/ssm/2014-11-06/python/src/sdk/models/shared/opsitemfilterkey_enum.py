"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
from enum import Enum

class OpsItemFilterKeyEnum(str, Enum):
    STATUS = 'Status'
    CREATED_BY = 'CreatedBy'
    SOURCE = 'Source'
    PRIORITY = 'Priority'
    TITLE = 'Title'
    OPS_ITEM_ID = 'OpsItemId'
    CREATED_TIME = 'CreatedTime'
    LAST_MODIFIED_TIME = 'LastModifiedTime'
    ACTUAL_START_TIME = 'ActualStartTime'
    ACTUAL_END_TIME = 'ActualEndTime'
    PLANNED_START_TIME = 'PlannedStartTime'
    PLANNED_END_TIME = 'PlannedEndTime'
    OPERATIONAL_DATA = 'OperationalData'
    OPERATIONAL_DATA_KEY = 'OperationalDataKey'
    OPERATIONAL_DATA_VALUE = 'OperationalDataValue'
    RESOURCE_ID = 'ResourceId'
    AUTOMATION_ID = 'AutomationId'
    CATEGORY = 'Category'
    SEVERITY = 'Severity'
    OPS_ITEM_TYPE = 'OpsItemType'
    CHANGE_REQUEST_BY_REQUESTER_ARN = 'ChangeRequestByRequesterArn'
    CHANGE_REQUEST_BY_REQUESTER_NAME = 'ChangeRequestByRequesterName'
    CHANGE_REQUEST_BY_APPROVER_ARN = 'ChangeRequestByApproverArn'
    CHANGE_REQUEST_BY_APPROVER_NAME = 'ChangeRequestByApproverName'
    CHANGE_REQUEST_BY_TEMPLATE = 'ChangeRequestByTemplate'
    CHANGE_REQUEST_BY_TARGETS_RESOURCE_GROUP = 'ChangeRequestByTargetsResourceGroup'
    INSIGHT_BY_TYPE = 'InsightByType'
    ACCOUNT_ID = 'AccountId'
