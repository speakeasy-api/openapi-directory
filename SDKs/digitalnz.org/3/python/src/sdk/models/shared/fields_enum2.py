import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class FieldsEnum2(str, Enum):
    CATEGORY = "category"
    CONTENT_PARTNER = "content_partner"
    DISPLAY_COLLECTION = "display_collection"
    COLLECTION = "collection"
    CREATOR = "creator"
    PLACENAME = "placename"
    DATE = "date"
    YEAR = "year"
    DECADE = "decade"
    CENTURY = "century"
    LANGUAGE = "language"
    RIGHTS = "rights"
    USAGE = "usage"
    COPYRIGHT = "copyright"
    SUBJECT = "subject"
    FORMAT = "format"
    DC_TYPE = "dc_type"

