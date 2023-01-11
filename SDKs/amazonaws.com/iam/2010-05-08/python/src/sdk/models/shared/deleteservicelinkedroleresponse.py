import dataclasses



@dataclasses.dataclass
class DeleteServiceLinkedRoleResponse:
    deletion_task_id: str = dataclasses.field()
    
