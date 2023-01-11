import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeReservedDbInstancesOfferingsActionEnum(str, Enum):
    DESCRIBE_RESERVED_DB_INSTANCES_OFFERINGS = "DescribeReservedDBInstancesOfferings"

class GetDescribeReservedDbInstancesOfferingsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclasses.dataclass
class GetDescribeReservedDbInstancesOfferingsQueryParams:
    action: GetDescribeReservedDbInstancesOfferingsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeReservedDbInstancesOfferingsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    db_instance_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceClass', 'style': 'form', 'explode': True }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Duration', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    multi_az: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MultiAZ', 'style': 'form', 'explode': True }})
    offering_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'OfferingType', 'style': 'form', 'explode': True }})
    product_description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ProductDescription', 'style': 'form', 'explode': True }})
    reserved_db_instances_offering_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReservedDBInstancesOfferingId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeReservedDbInstancesOfferingsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeReservedDbInstancesOfferingsRequest:
    headers: GetDescribeReservedDbInstancesOfferingsHeaders = dataclasses.field()
    query_params: GetDescribeReservedDbInstancesOfferingsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeReservedDbInstancesOfferingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
