import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import getimportationreportresponsediff as shared_getimportationreportresponsediff
from ..shared import getimportationreportresponseerror as shared_getimportationreportresponseerror
from ..shared import getimportationreportresponseimportationinfo as shared_getimportationreportresponseimportationinfo
from ..shared import getimportationreportresponseproductmetrics as shared_getimportationreportresponseproductmetrics


@dataclass_json
@dataclasses.dataclass
class GetImportationReportResponse:
    r"""GetImportationReportResponse
    Get Importation Report Response
    """
    
    errors: list[shared_getimportationreportresponseerror.GetImportationReportResponseError] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    execution_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionId') }})
    importation_info: shared_getimportationreportresponseimportationinfo.GetImportationReportResponseImportationInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('importationInfo') }})
    categories: Optional[shared_getimportationreportresponsediff.GetImportationReportResponseDiff] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    columns: Optional[shared_getimportationreportresponsediff.GetImportationReportResponseDiff] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    product_metrics: Optional[shared_getimportationreportresponseproductmetrics.GetImportationReportResponseProductMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productMetrics') }})
    products: Optional[shared_getimportationreportresponsediff.GetImportationReportResponseDiff] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    
