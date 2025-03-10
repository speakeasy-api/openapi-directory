"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from enum import Enum
from typing import Optional

class GETBatchModifyClusterSnapshotsActionEnum(str, Enum):
    BATCH_MODIFY_CLUSTER_SNAPSHOTS = 'BatchModifyClusterSnapshots'

class GETBatchModifyClusterSnapshotsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_12_01 = '2012-12-01'


@dataclasses.dataclass
class GETBatchModifyClusterSnapshotsRequest:
    
    action: GETBatchModifyClusterSnapshotsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})  
    snapshot_identifier_list: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'SnapshotIdentifierList', 'style': 'form', 'explode': True }})
    r"""A list of snapshot identifiers you want to modify."""  
    version: GETBatchModifyClusterSnapshotsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})  
    force: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Force', 'style': 'form', 'explode': True }})
    r"""A boolean value indicating whether to override an exception if the retention period has passed."""  
    manual_snapshot_retention_period: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ManualSnapshotRetentionPeriod', 'style': 'form', 'explode': True }})
    r"""<p>The number of days that a manual snapshot is retained. If you specify the value -1, the manual snapshot is retained indefinitely.</p> <p>The number must be either -1 or an integer between 1 and 3,653.</p> <p>If you decrease the manual snapshot retention period from its current value, existing manual snapshots that fall outside of the new retention period will return an error. If you want to suppress the errors and delete the snapshots, use the force option. </p>"""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class GETBatchModifyClusterSnapshotsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    