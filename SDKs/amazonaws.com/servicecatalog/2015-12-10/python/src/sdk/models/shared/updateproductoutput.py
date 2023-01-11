import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import productviewdetail as shared_productviewdetail
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class UpdateProductOutput:
    product_view_detail: Optional[shared_productviewdetail.ProductViewDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductViewDetail') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
