import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startondemandreplicationrunrequest as shared_startondemandreplicationrunrequest
from ..shared import startondemandreplicationrunresponse as shared_startondemandreplicationrunresponse

class StartOnDemandReplicationRunXAmzTargetEnum(str, Enum):
    AWS_SERVER_MIGRATION_SERVICE_V2016_10_24_START_ON_DEMAND_REPLICATION_RUN = "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun"


@dataclasses.dataclass
class StartOnDemandReplicationRunHeaders:
    x_amz_target: StartOnDemandReplicationRunXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartOnDemandReplicationRunRequest:
    headers: StartOnDemandReplicationRunHeaders = dataclasses.field()
    request: shared_startondemandreplicationrunrequest.StartOnDemandReplicationRunRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartOnDemandReplicationRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dry_run_operation_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    missing_required_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    replication_run_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    start_on_demand_replication_run_response: Optional[shared_startondemandreplicationrunresponse.StartOnDemandReplicationRunResponse] = dataclasses.field(default=None)
    unauthorized_operation_exception: Optional[Any] = dataclasses.field(default=None)
    
