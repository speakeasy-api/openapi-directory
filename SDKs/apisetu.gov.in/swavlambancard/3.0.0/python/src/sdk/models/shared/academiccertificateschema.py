import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclasses.dataclass
class AcademicCertificateSchemaCertificateDataExamination:
    month: str = dataclasses.field()
    name: str = dataclasses.field()
    year: str = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchemaCertificateDataPerformanceSubjects:
    code: str = dataclasses.field()
    gp: str = dataclasses.field()
    gp_max: str = dataclasses.field()
    grade: str = dataclasses.field()
    marks_max: int = dataclasses.field()
    marks_max_practical: int = dataclasses.field()
    marks_max_theory: int = dataclasses.field()
    marks_practical: int = dataclasses.field()
    marks_theory: int = dataclasses.field()
    marks_total: int = dataclasses.field()
    name: str = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchemaCertificateDataPerformance:
    subjects: list[AcademicCertificateSchemaCertificateDataPerformanceSubjects] = dataclasses.field()
    cgpa: str = dataclasses.field()
    cgpa_max: str = dataclasses.field()
    grade: str = dataclasses.field()
    marks_max: str = dataclasses.field()
    marks_total: str = dataclasses.field()
    percentage: str = dataclasses.field()
    result: str = dataclasses.field()
    result_date: str = dataclasses.field()
    update_date: str = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchemaCertificateDataSchool:
    code: str = dataclasses.field()
    name: str = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchemaCertificateData:
    examination: AcademicCertificateSchemaCertificateDataExamination = dataclasses.field()
    performance: AcademicCertificateSchemaCertificateDataPerformance = dataclasses.field()
    school: AcademicCertificateSchemaCertificateDataSchool = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchemaIssuedByOrganizationAddress:
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
class AcademicCertificateSchemaIssuedByOrganization:
    address: AcademicCertificateSchemaIssuedByOrganizationAddress = dataclasses.field()
    code: str = dataclasses.field()
    name: str = dataclasses.field()
    tin: str = dataclasses.field()
    type: str = dataclasses.field()
    uid: str = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchemaIssuedBy:
    organization: AcademicCertificateSchemaIssuedByOrganization = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchemaIssuedToPersonAddress:
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
class AcademicCertificateSchemaIssuedToPersonPhoto:
    format: str = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchemaIssuedToPerson:
    address: AcademicCertificateSchemaIssuedToPersonAddress = dataclasses.field()
    photo: AcademicCertificateSchemaIssuedToPersonPhoto = dataclasses.field()
    category: str = dataclasses.field()
    disability_status: str = dataclasses.field()
    dob: str = dataclasses.field()
    email: str = dataclasses.field()
    gender: str = dataclasses.field()
    marital_status: str = dataclasses.field()
    mother_name: str = dataclasses.field()
    name: str = dataclasses.field()
    phone: str = dataclasses.field()
    religion: str = dataclasses.field()
    swd: str = dataclasses.field()
    swd_indicator: str = dataclasses.field()
    title: str = dataclasses.field()
    uid: str = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchemaIssuedTo:
    person: AcademicCertificateSchemaIssuedToPerson = dataclasses.field()
    

@dataclasses.dataclass
class AcademicCertificateSchema:
    certificate_data: AcademicCertificateSchemaCertificateData = dataclasses.field()
    issued_by: AcademicCertificateSchemaIssuedBy = dataclasses.field()
    issued_to: AcademicCertificateSchemaIssuedTo = dataclasses.field()
    issue_date: str = dataclasses.field()
    issued_at: str = dataclasses.field()
    language: str = dataclasses.field()
    name: str = dataclasses.field()
    number: int = dataclasses.field()
    status: str = dataclasses.field()
    type: str = dataclasses.field()
    valid_from_date: str = dataclasses.field()
    
