import dataclasses
from enum import Enum

class SourceTypeEnum(str, Enum):
    GIT = "git"
    SVN = "svn"
    ARCHIVE = "archive"
    S3 = "s3"

