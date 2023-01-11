import dataclasses



@dataclasses.dataclass
class DeleteV3AssetChangesChangeSetsChangeSetIDPathParams:
    change_set_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'change-set-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteV3AssetChangesChangeSetsChangeSetIDRequest:
    path_params: DeleteV3AssetChangesChangeSetsChangeSetIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteV3AssetChangesChangeSetsChangeSetIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
