import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import typedlinkattributerange as shared_typedlinkattributerange
from ..shared import listoutgoingtypedlinksresponse as shared_listoutgoingtypedlinksresponse


@dataclasses.dataclass
class ListOutgoingTypedLinksHeaders:
    x_amz_data_partition: str = dataclasses.field(metadata={'header': { 'field_name': 'x-amz-data-partition', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum(str, Enum):
    SERIALIZABLE = "SERIALIZABLE"
    EVENTUAL = "EVENTUAL"


@dataclass_json
@dataclasses.dataclass
class ListOutgoingTypedLinksRequestBodyFilterTypedLink:
    r"""ListOutgoingTypedLinksRequestBodyFilterTypedLink
    Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
    """
    
    schema_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SchemaArn') }})
    typed_link_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypedLinkName') }})
    

@dataclass_json
@dataclasses.dataclass
class ListOutgoingTypedLinksRequestBodyObjectReference:
    r"""ListOutgoingTypedLinksRequestBodyObjectReference
    The reference that identifies an object.
    """
    
    selector: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Selector') }})
    

@dataclass_json
@dataclasses.dataclass
class ListOutgoingTypedLinksRequestBody:
    object_reference: ListOutgoingTypedLinksRequestBodyObjectReference = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectReference') }})
    consistency_level: Optional[ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsistencyLevel') }})
    filter_attribute_ranges: Optional[list[shared_typedlinkattributerange.TypedLinkAttributeRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterAttributeRanges') }})
    filter_typed_link: Optional[ListOutgoingTypedLinksRequestBodyFilterTypedLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterTypedLink') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    

@dataclasses.dataclass
class ListOutgoingTypedLinksRequest:
    headers: ListOutgoingTypedLinksHeaders = dataclasses.field()
    request: ListOutgoingTypedLinksRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListOutgoingTypedLinksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    directory_not_enabled_exception: Optional[Any] = dataclasses.field(default=None)
    facet_validation_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_arn_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    list_outgoing_typed_links_response: Optional[shared_listoutgoingtypedlinksresponse.ListOutgoingTypedLinksResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    retryable_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
