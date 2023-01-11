import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listonpremisesinstancesinput as shared_listonpremisesinstancesinput
from ..shared import listonpremisesinstancesoutput as shared_listonpremisesinstancesoutput

class ListOnPremisesInstancesXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_LIST_ON_PREMISES_INSTANCES = "CodeDeploy_20141006.ListOnPremisesInstances"


@dataclasses.dataclass
class ListOnPremisesInstancesHeaders:
    x_amz_target: ListOnPremisesInstancesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListOnPremisesInstancesRequest:
    headers: ListOnPremisesInstancesHeaders = dataclasses.field()
    request: shared_listonpremisesinstancesinput.ListOnPremisesInstancesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListOnPremisesInstancesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_registration_status_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_tag_filter_exception: Optional[Any] = dataclasses.field(default=None)
    list_on_premises_instances_output: Optional[shared_listonpremisesinstancesoutput.ListOnPremisesInstancesOutput] = dataclasses.field(default=None)
    
