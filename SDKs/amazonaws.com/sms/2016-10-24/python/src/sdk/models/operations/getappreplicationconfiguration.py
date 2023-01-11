import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getappreplicationconfigurationrequest as shared_getappreplicationconfigurationrequest
from ..shared import getappreplicationconfigurationresponse as shared_getappreplicationconfigurationresponse

class GetAppReplicationConfigurationXAmzTargetEnum(str, Enum):
    AWS_SERVER_MIGRATION_SERVICE_V2016_10_24_GET_APP_REPLICATION_CONFIGURATION = "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration"


@dataclasses.dataclass
class GetAppReplicationConfigurationHeaders:
    x_amz_target: GetAppReplicationConfigurationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAppReplicationConfigurationRequest:
    headers: GetAppReplicationConfigurationHeaders = dataclasses.field()
    request: shared_getappreplicationconfigurationrequest.GetAppReplicationConfigurationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetAppReplicationConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_app_replication_configuration_response: Optional[shared_getappreplicationconfigurationresponse.GetAppReplicationConfigurationResponse] = dataclasses.field(default=None)
    internal_error: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    missing_required_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_operation_exception: Optional[Any] = dataclasses.field(default=None)
    
