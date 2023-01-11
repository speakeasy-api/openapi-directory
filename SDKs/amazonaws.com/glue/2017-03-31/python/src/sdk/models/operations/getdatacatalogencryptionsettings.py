import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getdatacatalogencryptionsettingsrequest as shared_getdatacatalogencryptionsettingsrequest
from ..shared import getdatacatalogencryptionsettingsresponse as shared_getdatacatalogencryptionsettingsresponse

class GetDataCatalogEncryptionSettingsXAmzTargetEnum(str, Enum):
    AWS_GLUE_GET_DATA_CATALOG_ENCRYPTION_SETTINGS = "AWSGlue.GetDataCatalogEncryptionSettings"


@dataclasses.dataclass
class GetDataCatalogEncryptionSettingsHeaders:
    x_amz_target: GetDataCatalogEncryptionSettingsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDataCatalogEncryptionSettingsRequest:
    headers: GetDataCatalogEncryptionSettingsHeaders = dataclasses.field()
    request: shared_getdatacatalogencryptionsettingsrequest.GetDataCatalogEncryptionSettingsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDataCatalogEncryptionSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_data_catalog_encryption_settings_response: Optional[shared_getdatacatalogencryptionsettingsresponse.GetDataCatalogEncryptionSettingsResponse] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    
