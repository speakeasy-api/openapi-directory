import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance:
    company_name: Optional[str] = dataclasses.field(default=None)
    policy_no: Optional[str] = dataclasses.field(default=None)
    valid_till: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle:
    chasis_no: Optional[str] = dataclasses.field(default=None)
    class_: Optional[dict[str, Any]] = dataclasses.field(default=None)
    color: Optional[str] = dataclasses.field(default=None)
    cubic_capacity: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cylinder: Optional[dict[str, Any]] = dataclasses.field(default=None)
    engine_no: Optional[str] = dataclasses.field(default=None)
    fit_till: Optional[dict[str, Any]] = dataclasses.field(default=None)
    fuel_desc: Optional[dict[str, Any]] = dataclasses.field(default=None)
    make: Optional[dict[str, Any]] = dataclasses.field(default=None)
    mfg_date: Optional[dict[str, Any]] = dataclasses.field(default=None)
    model: Optional[str] = dataclasses.field(default=None)
    seat_capacity: Optional[str] = dataclasses.field(default=None)
    sleeper_capacity: Optional[str] = dataclasses.field(default=None)
    standing_capacity: Optional[dict[str, Any]] = dataclasses.field(default=None)
    unladen_weight: Optional[str] = dataclasses.field(default=None)
    wheelbase: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class VehicleRegistrationSchemaCertificateDataVehicleRegistration:
    financer: str = dataclasses.field()
    norms_desc: str = dataclasses.field()
    status_date: str = dataclasses.field()
    insurance: Optional[VehicleRegistrationSchemaCertificateDataVehicleRegistrationInsurance] = dataclasses.field(default=None)
    vehicle: Optional[VehicleRegistrationSchemaCertificateDataVehicleRegistrationVehicle] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class VehicleRegistrationSchemaCertificateData:
    vehicle_registration: Optional[VehicleRegistrationSchemaCertificateDataVehicleRegistration] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class VehicleRegistrationSchemaIssuedByOrganizationAddress:
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
class VehicleRegistrationSchemaIssuedByOrganization:
    address: VehicleRegistrationSchemaIssuedByOrganizationAddress = dataclasses.field()
    code: str = dataclasses.field()
    name: str = dataclasses.field()
    tin: str = dataclasses.field()
    type: str = dataclasses.field()
    uid: str = dataclasses.field()
    

@dataclasses.dataclass
class VehicleRegistrationSchemaIssuedBy:
    organization: VehicleRegistrationSchemaIssuedByOrganization = dataclasses.field()
    

@dataclasses.dataclass
class VehicleRegistrationSchemaIssuedToPersonAddress:
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
class VehicleRegistrationSchemaIssuedToPersonPhoto:
    format: str = dataclasses.field()
    

@dataclasses.dataclass
class VehicleRegistrationSchemaIssuedToPerson:
    address: VehicleRegistrationSchemaIssuedToPersonAddress = dataclasses.field()
    photo: VehicleRegistrationSchemaIssuedToPersonPhoto = dataclasses.field()
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
class VehicleRegistrationSchemaIssuedTo:
    person: VehicleRegistrationSchemaIssuedToPerson = dataclasses.field()
    

@dataclasses.dataclass
class VehicleRegistrationSchema:
    certificate_data: VehicleRegistrationSchemaCertificateData = dataclasses.field()
    issued_by: VehicleRegistrationSchemaIssuedBy = dataclasses.field()
    issued_to: VehicleRegistrationSchemaIssuedTo = dataclasses.field()
    issue_date: str = dataclasses.field()
    issued_at: str = dataclasses.field()
    language: str = dataclasses.field()
    name: str = dataclasses.field()
    number: int = dataclasses.field()
    status: str = dataclasses.field()
    type: str = dataclasses.field()
    valid_from_date: str = dataclasses.field()
    expiry_date: Optional[str] = dataclasses.field(default=None)
    
