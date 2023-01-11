import dataclasses
from typing import Optional
from ..shared import testresult as shared_testresult


@dataclasses.dataclass
class TestFunctionResult:
    test_result: Optional[shared_testresult.TestResult] = dataclasses.field(default=None)
    
