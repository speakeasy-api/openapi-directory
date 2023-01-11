import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification:
    r"""ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
    The default credit option for CPU usage of the instance family.
    """
    
    cpu_credits: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_family: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyDefaultCreditSpecificationResult:
    instance_family_credit_specification: Optional[ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification] = dataclasses.field(default=None)
    
