import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetPurchaseReservedDbInstancesOfferingActionEnum(str, Enum):
    PURCHASE_RESERVED_DB_INSTANCES_OFFERING = "PurchaseReservedDBInstancesOffering"

class GetPurchaseReservedDbInstancesOfferingVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_02_12 = "2013-02-12"


@dataclasses.dataclass
class GetPurchaseReservedDbInstancesOfferingQueryParams:
    action: GetPurchaseReservedDbInstancesOfferingActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    reserved_db_instances_offering_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'ReservedDBInstancesOfferingId', 'style': 'form', 'explode': True }})
    version: GetPurchaseReservedDbInstancesOfferingVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    db_instance_count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DBInstanceCount', 'style': 'form', 'explode': True }})
    reserved_db_instance_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ReservedDBInstanceId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPurchaseReservedDbInstancesOfferingHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPurchaseReservedDbInstancesOfferingRequest:
    headers: GetPurchaseReservedDbInstancesOfferingHeaders = dataclasses.field()
    query_params: GetPurchaseReservedDbInstancesOfferingQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPurchaseReservedDbInstancesOfferingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
