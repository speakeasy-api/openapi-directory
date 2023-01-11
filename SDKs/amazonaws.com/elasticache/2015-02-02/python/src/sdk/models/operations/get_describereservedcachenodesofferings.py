import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeReservedCacheNodesOfferingsActionEnum(str, Enum):
    DESCRIBE_RESERVED_CACHE_NODES_OFFERINGS = "DescribeReservedCacheNodesOfferings"

class GetDescribeReservedCacheNodesOfferingsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_02_02 = "2015-02-02"


@dataclasses.dataclass
class GetDescribeReservedCacheNodesOfferingsQueryParams:
    action: GetDescribeReservedCacheNodesOfferingsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeReservedCacheNodesOfferingsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    cache_node_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CacheNodeType', 'style': 'form', 'explode': True }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Duration', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    offering_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'OfferingType', 'style': 'form', 'explode': True }})
    product_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ProductDescription', 'style': 'form', 'explode': True }})
    reserved_cache_nodes_offering_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReservedCacheNodesOfferingId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeReservedCacheNodesOfferingsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeReservedCacheNodesOfferingsRequest:
    headers: GetDescribeReservedCacheNodesOfferingsHeaders = dataclasses.field()
    query_params: GetDescribeReservedCacheNodesOfferingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeReservedCacheNodesOfferingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
