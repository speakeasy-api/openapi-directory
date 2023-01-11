import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PanVerificationRecordSchemaCertificateDataPanVerificationRecord:
    num: str = dataclasses.field()
    verified_on: str = dataclasses.field()
    

@dataclasses.dataclass
class PanVerificationRecordSchemaCertificateData:
    pan_verification_record: Optional[PanVerificationRecordSchemaCertificateDataPanVerificationRecord] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PanVerificationRecordSchemaIssuedByOrganizationAddress:
    country: str = dataclasses.field()
    district: str = dataclasses.field()
    house: str = dataclasses.field()
    landmark: str = dataclasses.field()
    line1: str = dataclasses.field()
    line2: str = dataclasses.field()
    locality: str = dataclasses.field()
    pin: str = dataclasses.field()
    state: str = dataclasses.field()
    type: str = dataclasses.field()
    vtc: str = dataclasses.field()
    

@dataclasses.dataclass
class PanVerificationRecordSchemaIssuedByOrganization:
    address: PanVerificationRecordSchemaIssuedByOrganizationAddress = dataclasses.field()
    code: str = dataclasses.field()
    name: str = dataclasses.field()
    tin: str = dataclasses.field()
    type: str = dataclasses.field()
    uid: str = dataclasses.field()
    

@dataclasses.dataclass
class PanVerificationRecordSchemaIssuedBy:
    organization: PanVerificationRecordSchemaIssuedByOrganization = dataclasses.field()
    

@dataclasses.dataclass
class PanVerificationRecordSchemaIssuedToPersonAddress:
    country: str = dataclasses.field()
    district: str = dataclasses.field()
    house: str = dataclasses.field()
    landmark: str = dataclasses.field()
    line1: str = dataclasses.field()
    line2: str = dataclasses.field()
    locality: str = dataclasses.field()
    pin: str = dataclasses.field()
    state: str = dataclasses.field()
    type: str = dataclasses.field()
    vtc: str = dataclasses.field()
    

@dataclasses.dataclass
class PanVerificationRecordSchemaIssuedToPersonPhoto:
    format: str = dataclasses.field()
    

@dataclasses.dataclass
class PanVerificationRecordSchemaIssuedToPerson:
    address: PanVerificationRecordSchemaIssuedToPersonAddress = dataclasses.field()
    photo: PanVerificationRecordSchemaIssuedToPersonPhoto = dataclasses.field()
    dob: str = dataclasses.field()
    email: str = dataclasses.field()
    gender: str = dataclasses.field()
    marital_status: str = dataclasses.field()
    name: str = dataclasses.field()
    phone: str = dataclasses.field()
    religion: str = dataclasses.field()
    swd: str = dataclasses.field()
    swd_indicator: str = dataclasses.field()
    title: str = dataclasses.field()
    uid: str = dataclasses.field()
    

@dataclasses.dataclass
class PanVerificationRecordSchemaIssuedTo:
    person: PanVerificationRecordSchemaIssuedToPerson = dataclasses.field()
    

@dataclasses.dataclass
class PanVerificationRecordSchema:
    certificate_data: PanVerificationRecordSchemaCertificateData = dataclasses.field()
    issued_by: PanVerificationRecordSchemaIssuedBy = dataclasses.field()
    issued_to: PanVerificationRecordSchemaIssuedTo = dataclasses.field()
    issue_date: str = dataclasses.field()
    issued_at: str = dataclasses.field()
    language: str = dataclasses.field()
    name: str = dataclasses.field()
    number: str = dataclasses.field()
    status: str = dataclasses.field()
    type: str = dataclasses.field()
    valid_from_date: str = dataclasses.field()
    
