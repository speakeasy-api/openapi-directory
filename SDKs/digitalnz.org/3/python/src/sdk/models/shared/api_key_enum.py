import dataclasses
from enum import Enum

class APIKeyEnum(str, Enum):
    NEWSPAPERS = "Newspapers"
    IMAGES = "Images"
    BOOKS = "Books"
    ARTICLES = "Articles"
    JOURNALS = "Journals"
    ARCHIVES = "Archives"
    AUDIO = "Audio"
    OTHER = "Other"
    MANUSCRIPTS = "Manuscripts"
    REFERENCE_SOURCES = "Reference sources"
    RESEARCH_PAPERS = "Research papers"
    VIDEOS = "Videos"
    MUSIC_SCORE = "Music Score"
    GROUPS = "Groups"
    DATA = "Data"
    WEBSITES = "Websites"
    SETS = "Sets"

