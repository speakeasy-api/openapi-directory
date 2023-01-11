import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification:
    r"""GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
    The default credit option for CPU usage of the instance family.
    """
    
    cpu_credits: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_family: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class GetDefaultCreditSpecificationResult:
    instance_family_credit_specification: Optional[GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification] = dataclasses.field(default=None)
    
