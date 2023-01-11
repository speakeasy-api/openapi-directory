import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import statustype_enum as shared_statustype_enum


@dataclasses.dataclass
class SigningCertificate:
    r"""SigningCertificate
    <p>Contains information about an X.509 signing certificate.</p> <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a> operations. </p>
    """
    
    certificate_body: str = dataclasses.field()
    certificate_id: str = dataclasses.field()
    status: shared_statustype_enum.StatusTypeEnum = dataclasses.field()
    user_name: str = dataclasses.field()
    upload_date: Optional[datetime] = dataclasses.field(default=None)
    
