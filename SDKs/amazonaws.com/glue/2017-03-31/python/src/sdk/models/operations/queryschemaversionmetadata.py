import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import queryschemaversionmetadatainput as shared_queryschemaversionmetadatainput
from ..shared import queryschemaversionmetadataresponse as shared_queryschemaversionmetadataresponse

class QuerySchemaVersionMetadataXAmzTargetEnum(str, Enum):
    AWS_GLUE_QUERY_SCHEMA_VERSION_METADATA = "AWSGlue.QuerySchemaVersionMetadata"


@dataclasses.dataclass
class QuerySchemaVersionMetadataHeaders:
    x_amz_target: QuerySchemaVersionMetadataXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class QuerySchemaVersionMetadataRequest:
    headers: QuerySchemaVersionMetadataHeaders = dataclasses.field()
    request: shared_queryschemaversionmetadatainput.QuerySchemaVersionMetadataInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class QuerySchemaVersionMetadataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    query_schema_version_metadata_response: Optional[shared_queryschemaversionmetadataresponse.QuerySchemaVersionMetadataResponse] = dataclasses.field(default=None)
    
