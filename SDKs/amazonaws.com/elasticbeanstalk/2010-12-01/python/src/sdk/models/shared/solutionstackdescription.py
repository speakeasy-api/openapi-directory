import dataclasses
from typing import Optional


@dataclasses.dataclass
class SolutionStackDescription:
    r"""SolutionStackDescription
    Describes the solution stack.
    """
    
    permitted_file_types: Optional[list[str]] = dataclasses.field(default=None)
    solution_stack_name: Optional[str] = dataclasses.field(default=None)
    
