import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ComputeExpressionRequest:
    r"""ComputeExpressionRequest
    The request message to compute an expression based on the provided product values
    """
    
    encrypted_expression: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptedExpression') }})
    product_values: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('productValues') }})
    
