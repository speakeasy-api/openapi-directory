import dataclasses
from typing import Optional


@dataclasses.dataclass
class ContentTreeLinks:
    git: str = dataclasses.field()
    html: str = dataclasses.field()
    self: str = dataclasses.field()
    

@dataclasses.dataclass
class ContentTreeEntriesLinks:
    git: str = dataclasses.field()
    html: str = dataclasses.field()
    self: str = dataclasses.field()
    

@dataclasses.dataclass
class ContentTreeEntries:
    links: ContentTreeEntriesLinks = dataclasses.field()
    download_url: str = dataclasses.field()
    git_url: str = dataclasses.field()
    html_url: str = dataclasses.field()
    name: str = dataclasses.field()
    path: str = dataclasses.field()
    sha: str = dataclasses.field()
    size: int = dataclasses.field()
    type: str = dataclasses.field()
    url: str = dataclasses.field()
    content: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ContentTree:
    r"""ContentTree
    Content Tree
    """
    
    links: ContentTreeLinks = dataclasses.field()
    download_url: str = dataclasses.field()
    git_url: str = dataclasses.field()
    html_url: str = dataclasses.field()
    name: str = dataclasses.field()
    path: str = dataclasses.field()
    sha: str = dataclasses.field()
    size: int = dataclasses.field()
    type: str = dataclasses.field()
    url: str = dataclasses.field()
    entries: Optional[list[ContentTreeEntries]] = dataclasses.field(default=None)
    
