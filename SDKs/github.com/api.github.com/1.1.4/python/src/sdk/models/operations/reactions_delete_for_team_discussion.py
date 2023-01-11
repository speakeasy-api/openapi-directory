import dataclasses



@dataclasses.dataclass
class ReactionsDeleteForTeamDiscussionPathParams:
    discussion_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'discussion_number', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    reaction_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsDeleteForTeamDiscussionRequest:
    path_params: ReactionsDeleteForTeamDiscussionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsDeleteForTeamDiscussionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
