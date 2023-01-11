package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata
 * Metadata about the requested resource.
**/
public class Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isbn")
    public String isbn;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata withIsbn(String isbn) {
        this.isbn = isbn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issn")
    public String issn;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata withIssn(String issn) {
        this.issn = issn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mms_id")
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsId mmsId;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata withMmsId(Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadataMmsId mmsId) {
        this.mmsId = mmsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publication_place")
    public String publicationPlace;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata withPublicationPlace(String publicationPlace) {
        this.publicationPlace = publicationPlace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publication_year")
    public String publicationYear;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata withPublicationYear(String publicationYear) {
        this.publicationYear = publicationYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public String publisher;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata withPublisher(String publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchemaRequestedResourceResourceMetadata withTitle(String title) {
        this.title = title;
        return this;
    }
}