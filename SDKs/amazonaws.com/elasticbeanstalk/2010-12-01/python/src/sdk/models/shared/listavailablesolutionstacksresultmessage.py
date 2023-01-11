import dataclasses
from typing import Optional
from ..shared import solutionstackdescription as shared_solutionstackdescription


@dataclasses.dataclass
class ListAvailableSolutionStacksResultMessage:
    r"""ListAvailableSolutionStacksResultMessage
    A list of available AWS Elastic Beanstalk solution stacks.
    """
    
    solution_stack_details: Optional[list[shared_solutionstackdescription.SolutionStackDescription]] = dataclasses.field(default=None)
    solution_stacks: Optional[list[str]] = dataclasses.field(default=None)
    
