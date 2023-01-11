import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customermanageds3storage as shared_customermanageds3storage
from ..shared import putstorageconfigurationresponse as shared_putstorageconfigurationresponse


@dataclasses.dataclass
class PutStorageConfigurationHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutStorageConfigurationRequestBodyMultiLayerStorage:
    r"""PutStorageConfigurationRequestBodyMultiLayerStorage
    Contains information about the storage destination.
    """
    
    customer_managed_s3_storage: Optional[shared_customermanageds3storage.CustomerManagedS3Storage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedS3Storage') }})
    
class PutStorageConfigurationRequestBodyStorageTypeEnum(str, Enum):
    SITEWISE_DEFAULT_STORAGE = "SITEWISE_DEFAULT_STORAGE"
    MULTI_LAYER_STORAGE = "MULTI_LAYER_STORAGE"


@dataclass_json
@dataclasses.dataclass
class PutStorageConfigurationRequestBody:
    storage_type: PutStorageConfigurationRequestBodyStorageTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageType') }})
    multi_layer_storage: Optional[PutStorageConfigurationRequestBodyMultiLayerStorage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiLayerStorage') }})
    

@dataclasses.dataclass
class PutStorageConfigurationRequest:
    headers: PutStorageConfigurationHeaders = dataclasses.field()
    request: PutStorageConfigurationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutStorageConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflicting_operation_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    put_storage_configuration_response: Optional[shared_putstorageconfigurationresponse.PutStorageConfigurationResponse] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
