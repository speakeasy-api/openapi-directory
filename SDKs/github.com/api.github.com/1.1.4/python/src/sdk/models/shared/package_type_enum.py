import dataclasses
from enum import Enum

class PackageTypeEnum(str, Enum):
    NPM = "npm"
    MAVEN = "maven"
    RUBYGEMS = "rubygems"
    DOCKER = "docker"
    NUGET = "nuget"
    CONTAINER = "container"

