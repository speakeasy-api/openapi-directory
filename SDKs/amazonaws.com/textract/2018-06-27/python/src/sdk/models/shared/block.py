import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import blocktype_enum as shared_blocktype_enum
from ..shared import entitytype_enum as shared_entitytype_enum
from ..shared import geometry as shared_geometry
from ..shared import relationship as shared_relationship
from ..shared import selectionstatus_enum as shared_selectionstatus_enum
from ..shared import texttype_enum as shared_texttype_enum


@dataclass_json
@dataclasses.dataclass
class Block:
    r"""Block
    <p>A <code>Block</code> represents items that are recognized in a document within a group of pixels close to each other. The information returned in a <code>Block</code> object depends on the type of operation. In text detection for documents (for example <a>DetectDocumentText</a>), you get information about the detected words and lines of text. In text analysis (for example <a>AnalyzeDocument</a>), you can also get information about the fields, tables, and selection elements that are detected in the document.</p> <p>An array of <code>Block</code> objects is returned by both synchronous and asynchronous operations. In synchronous operations, such as <a>DetectDocumentText</a>, the array of <code>Block</code> objects is the entire set of results. In asynchronous operations, such as <a>GetDocumentAnalysis</a>, the array is returned over one or more responses.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/textract/latest/dg/how-it-works.html\">How Amazon Textract Works</a>.</p>
    """
    
    block_type: Optional[shared_blocktype_enum.BlockTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockType') }})
    column_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnIndex') }})
    column_span: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnSpan') }})
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    entity_types: Optional[list[shared_entitytype_enum.EntityTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityTypes') }})
    geometry: Optional[shared_geometry.Geometry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Page') }})
    relationships: Optional[list[shared_relationship.Relationship]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Relationships') }})
    row_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RowIndex') }})
    row_span: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RowSpan') }})
    selection_status: Optional[shared_selectionstatus_enum.SelectionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelectionStatus') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    text_type: Optional[shared_texttype_enum.TextTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextType') }})
    
