import dataclasses
from enum import Enum

class RepoEnum1(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"
    STARGAZERS = "stargazers"
    WATCHERS = "watchers"

