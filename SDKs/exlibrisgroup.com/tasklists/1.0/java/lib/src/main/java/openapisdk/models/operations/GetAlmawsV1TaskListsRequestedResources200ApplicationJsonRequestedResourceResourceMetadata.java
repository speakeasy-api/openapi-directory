package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata
 * Metadata about the requested resource.
**/
public class GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbn")
    public String isbn;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata withIsbn(String isbn) {
        this.isbn = isbn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issn")
    public String issn;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata withIssn(String issn) {
        this.issn = issn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mms_id")
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId mmsId;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata withMmsId(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId mmsId) {
        this.mmsId = mmsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publication_place")
    public String publicationPlace;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata withPublicationPlace(String publicationPlace) {
        this.publicationPlace = publicationPlace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publication_year")
    public String publicationYear;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata withPublicationYear(String publicationYear) {
        this.publicationYear = publicationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata withTitle(String title) {
        this.title = title;
        return this;
    }
}