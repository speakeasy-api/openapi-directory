import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class DrivingLicenseSchemaCertificateDataDrivingLicense:
    abbreviation: str = dataclasses.field()
    code: str = dataclasses.field()
    description: str = dataclasses.field()
    endorse_date: str = dataclasses.field()
    issue_date: str = dataclasses.field()
    

@dataclasses.dataclass
class DrivingLicenseSchemaCertificateData:
    driving_license: Optional[DrivingLicenseSchemaCertificateDataDrivingLicense] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DrivingLicenseSchemaIssuedByOrganizationAddress:
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
class DrivingLicenseSchemaIssuedByOrganization:
    address: DrivingLicenseSchemaIssuedByOrganizationAddress = dataclasses.field()
    code: str = dataclasses.field()
    name: str = dataclasses.field()
    tin: str = dataclasses.field()
    type: str = dataclasses.field()
    uid: str = dataclasses.field()
    

@dataclasses.dataclass
class DrivingLicenseSchemaIssuedBy:
    organization: DrivingLicenseSchemaIssuedByOrganization = dataclasses.field()
    

@dataclasses.dataclass
class DrivingLicenseSchemaIssuedToPersonAddress:
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
class DrivingLicenseSchemaIssuedToPersonPhoto:
    format: str = dataclasses.field()
    

@dataclasses.dataclass
class DrivingLicenseSchemaIssuedToPerson:
    address: DrivingLicenseSchemaIssuedToPersonAddress = dataclasses.field()
    photo: DrivingLicenseSchemaIssuedToPersonPhoto = dataclasses.field()
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
class DrivingLicenseSchemaIssuedTo:
    person: DrivingLicenseSchemaIssuedToPerson = dataclasses.field()
    

@dataclasses.dataclass
class DrivingLicenseSchema:
    certificate_data: DrivingLicenseSchemaCertificateData = dataclasses.field()
    issued_by: DrivingLicenseSchemaIssuedBy = dataclasses.field()
    issued_to: DrivingLicenseSchemaIssuedTo = dataclasses.field()
    issue_date: str = dataclasses.field()
    issued_at: str = dataclasses.field()
    language: str = dataclasses.field()
    name: str = dataclasses.field()
    number: int = dataclasses.field()
    status: str = dataclasses.field()
    type: str = dataclasses.field()
    valid_from_date: str = dataclasses.field()
    expiry_date: Optional[str] = dataclasses.field(default=None)
    prev_number: Optional[int] = dataclasses.field(default=None)
    
