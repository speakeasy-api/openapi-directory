import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conflictdetectiontype_enum as shared_conflictdetectiontype_enum
from ..shared import conflicthandlertype_enum as shared_conflicthandlertype_enum
from ..shared import lambdaconflicthandlerconfig as shared_lambdaconflicthandlerconfig
from ..shared import createresolverresponse as shared_createresolverresponse


@dataclasses.dataclass
class CreateResolverPathParams:
    api_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    type_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'typeName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateResolverHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateResolverRequestBodyCachingConfig:
    r"""CreateResolverRequestBodyCachingConfig
    The caching configuration for a resolver that has caching enabled.
    """
    
    caching_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cachingKeys') }})
    ttl: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
class CreateResolverRequestBodyKindEnum(str, Enum):
    UNIT = "UNIT"
    PIPELINE = "PIPELINE"


@dataclass_json
@dataclasses.dataclass
class CreateResolverRequestBodyPipelineConfig:
    r"""CreateResolverRequestBodyPipelineConfig
    The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
    """
    
    functions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('functions') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateResolverRequestBodySyncConfig:
    r"""CreateResolverRequestBodySyncConfig
    <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
    """
    
    conflict_detection: Optional[shared_conflictdetectiontype_enum.ConflictDetectionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictDetection') }})
    conflict_handler: Optional[shared_conflicthandlertype_enum.ConflictHandlerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conflictHandler') }})
    lambda_conflict_handler_config: Optional[shared_lambdaconflicthandlerconfig.LambdaConflictHandlerConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaConflictHandlerConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateResolverRequestBody:
    field_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldName') }})
    caching_config: Optional[CreateResolverRequestBodyCachingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cachingConfig') }})
    data_source_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceName') }})
    kind: Optional[CreateResolverRequestBodyKindEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pipeline_config: Optional[CreateResolverRequestBodyPipelineConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineConfig') }})
    request_mapping_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestMappingTemplate') }})
    response_mapping_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseMappingTemplate') }})
    sync_config: Optional[CreateResolverRequestBodySyncConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncConfig') }})
    

@dataclasses.dataclass
class CreateResolverRequest:
    headers: CreateResolverHeaders = dataclasses.field()
    path_params: CreateResolverPathParams = dataclasses.field()
    request: CreateResolverRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateResolverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    create_resolver_response: Optional[shared_createresolverresponse.CreateResolverResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
