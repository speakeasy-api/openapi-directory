import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cluster as shared_cluster
from ..shared import unprocessedcluster as shared_unprocessedcluster


@dataclass_json
@dataclasses.dataclass
class BatchUpdateClusterResponse:
    processed_clusters: Optional[list[shared_cluster.Cluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessedClusters') }})
    unprocessed_clusters: Optional[list[shared_unprocessedcluster.UnprocessedCluster]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedClusters') }})
    
