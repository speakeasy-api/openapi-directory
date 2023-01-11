import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sourcebuildinformation as shared_sourcebuildinformation
from ..shared import s3location as shared_s3location
from ..shared import applicationversionstatus_enum as shared_applicationversionstatus_enum


@dataclasses.dataclass
class ApplicationVersionDescription:
    r"""ApplicationVersionDescription
    Describes the properties of an application version.
    """
    
    application_name: Optional[str] = dataclasses.field(default=None)
    application_version_arn: Optional[str] = dataclasses.field(default=None)
    build_arn: Optional[str] = dataclasses.field(default=None)
    date_created: Optional[datetime] = dataclasses.field(default=None)
    date_updated: Optional[datetime] = dataclasses.field(default=None)
    description: Optional[str] = dataclasses.field(default=None)
    source_build_information: Optional[shared_sourcebuildinformation.SourceBuildInformation] = dataclasses.field(default=None)
    source_bundle: Optional[shared_s3location.S3Location] = dataclasses.field(default=None)
    status: Optional[shared_applicationversionstatus_enum.ApplicationVersionStatusEnum] = dataclasses.field(default=None)
    version_label: Optional[str] = dataclasses.field(default=None)
    
