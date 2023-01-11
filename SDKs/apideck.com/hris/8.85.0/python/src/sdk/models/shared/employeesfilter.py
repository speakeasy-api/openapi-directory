import dataclasses
from typing import Optional
from enum import Enum

class EmployeesFilterEmploymentStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    TERMINATED = "terminated"
    OTHER = "other"


@dataclasses.dataclass
class EmployeesFilter:
    company_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'company_id' }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email' }})
    employee_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'employee_number' }})
    employment_status: Optional[EmployeesFilterEmploymentStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'employment_status' }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_name' }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_name' }})
    manager_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'manager_id' }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'title' }})
    
