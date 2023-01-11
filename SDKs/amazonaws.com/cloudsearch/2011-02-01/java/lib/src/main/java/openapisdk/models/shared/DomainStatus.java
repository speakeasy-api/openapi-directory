package openapisdk.models.shared;



/**
 * DomainStatus
 * The current status of the search domain.
**/
public class DomainStatus {
    public Boolean created;
    public DomainStatus withCreated(Boolean created) {
        this.created = created;
        return this;
    }
    public Boolean deleted;
    public DomainStatus withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    public ServiceEndpoint docService;
    public DomainStatus withDocService(ServiceEndpoint docService) {
        this.docService = docService;
        return this;
    }
    public String domainId;
    public DomainStatus withDomainId(String domainId) {
        this.domainId = domainId;
        return this;
    }
    public String domainName;
    public DomainStatus withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    public Long numSearchableDocs;
    public DomainStatus withNumSearchableDocs(Long numSearchableDocs) {
        this.numSearchableDocs = numSearchableDocs;
        return this;
    }
    public Boolean processing;
    public DomainStatus withProcessing(Boolean processing) {
        this.processing = processing;
        return this;
    }
    public Boolean requiresIndexDocuments;
    public DomainStatus withRequiresIndexDocuments(Boolean requiresIndexDocuments) {
        this.requiresIndexDocuments = requiresIndexDocuments;
        return this;
    }
    public Long searchInstanceCount;
    public DomainStatus withSearchInstanceCount(Long searchInstanceCount) {
        this.searchInstanceCount = searchInstanceCount;
        return this;
    }
    public String searchInstanceType;
    public DomainStatus withSearchInstanceType(String searchInstanceType) {
        this.searchInstanceType = searchInstanceType;
        return this;
    }
    public Long searchPartitionCount;
    public DomainStatus withSearchPartitionCount(Long searchPartitionCount) {
        this.searchPartitionCount = searchPartitionCount;
        return this;
    }
    public ServiceEndpoint searchService;
    public DomainStatus withSearchService(ServiceEndpoint searchService) {
        this.searchService = searchService;
        return this;
    }
}