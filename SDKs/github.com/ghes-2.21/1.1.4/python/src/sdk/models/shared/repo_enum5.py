import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class RepoEnum5(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    POPULARITY = "popularity"
    LONG_RUNNING = "long-running"

