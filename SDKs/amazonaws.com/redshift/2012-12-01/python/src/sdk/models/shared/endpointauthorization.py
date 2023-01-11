import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import authorizationstatus_enum as shared_authorizationstatus_enum


@dataclasses.dataclass
class EndpointAuthorization:
    r"""EndpointAuthorization
    Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across Amazon Web Services accounts.
    """
    
    allowed_all_vp_cs: Optional[bool] = dataclasses.field(default=None)
    allowed_vp_cs: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    authorize_time: Optional[datetime] = dataclasses.field(default=None)
    cluster_identifier: Optional[str] = dataclasses.field(default=None)
    cluster_status: Optional[str] = dataclasses.field(default=None)
    endpoint_count: Optional[int] = dataclasses.field(default=None)
    grantee: Optional[str] = dataclasses.field(default=None)
    grantor: Optional[str] = dataclasses.field(default=None)
    status: Optional[shared_authorizationstatus_enum.AuthorizationStatusEnum] = dataclasses.field(default=None)
    
