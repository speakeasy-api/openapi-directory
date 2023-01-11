import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importdatasourceconfig as shared_importdatasourceconfig
from ..shared import delimitedtextimportoptions as shared_delimitedtextimportoptions
from ..shared import destinationoptions as shared_destinationoptions
from ..shared import starttabledataimportjobresult as shared_starttabledataimportjobresult


@dataclasses.dataclass
class StartTableDataImportJobPathParams:
    table_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tableId', 'style': 'simple', 'explode': False }})
    workbook_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workbookId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartTableDataImportJobHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class StartTableDataImportJobRequestBodyDataFormatEnum(str, Enum):
    DELIMITED_TEXT = "DELIMITED_TEXT"


@dataclass_json
@dataclasses.dataclass
class StartTableDataImportJobRequestBodyDataSource:
    r"""StartTableDataImportJobRequestBodyDataSource
    An object that has details about the source of the data that was submitted for import.
    """
    
    data_source_config: Optional[shared_importdatasourceconfig.ImportDataSourceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class StartTableDataImportJobRequestBodyImportOptions:
    r"""StartTableDataImportJobRequestBodyImportOptions
    An object that contains the options specified by the sumitter of the import request.
    """
    
    delimited_text_options: Optional[shared_delimitedtextimportoptions.DelimitedTextImportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delimitedTextOptions') }})
    destination_options: Optional[shared_destinationoptions.DestinationOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationOptions') }})
    

@dataclass_json
@dataclasses.dataclass
class StartTableDataImportJobRequestBody:
    client_request_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    data_format: StartTableDataImportJobRequestBodyDataFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFormat') }})
    data_source: StartTableDataImportJobRequestBodyDataSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    import_options: StartTableDataImportJobRequestBodyImportOptions = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('importOptions') }})
    

@dataclasses.dataclass
class StartTableDataImportJobRequest:
    headers: StartTableDataImportJobHeaders = dataclasses.field()
    path_params: StartTableDataImportJobPathParams = dataclasses.field()
    request: StartTableDataImportJobRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartTableDataImportJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    start_table_data_import_job_result: Optional[shared_starttabledataimportjobresult.StartTableDataImportJobResult] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
