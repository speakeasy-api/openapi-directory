package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchReadSuccessfulResponse
 * Represents the output of a <code>BatchRead</code> success response operation.
**/
public class BatchReadSuccessfulResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GetLinkAttributes")
    public BatchGetLinkAttributesResponse getLinkAttributes;
    public BatchReadSuccessfulResponse withGetLinkAttributes(BatchGetLinkAttributesResponse getLinkAttributes) {
        this.getLinkAttributes = getLinkAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GetObjectAttributes")
    public BatchGetObjectAttributesResponse getObjectAttributes;
    public BatchReadSuccessfulResponse withGetObjectAttributes(BatchGetObjectAttributesResponse getObjectAttributes) {
        this.getObjectAttributes = getObjectAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GetObjectInformation")
    public BatchGetObjectInformationResponse getObjectInformation;
    public BatchReadSuccessfulResponse withGetObjectInformation(BatchGetObjectInformationResponse getObjectInformation) {
        this.getObjectInformation = getObjectInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListAttachedIndices")
    public BatchListAttachedIndicesResponse listAttachedIndices;
    public BatchReadSuccessfulResponse withListAttachedIndices(BatchListAttachedIndicesResponse listAttachedIndices) {
        this.listAttachedIndices = listAttachedIndices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListIncomingTypedLinks")
    public BatchListIncomingTypedLinksResponse listIncomingTypedLinks;
    public BatchReadSuccessfulResponse withListIncomingTypedLinks(BatchListIncomingTypedLinksResponse listIncomingTypedLinks) {
        this.listIncomingTypedLinks = listIncomingTypedLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListIndex")
    public BatchListIndexResponse listIndex;
    public BatchReadSuccessfulResponse withListIndex(BatchListIndexResponse listIndex) {
        this.listIndex = listIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListObjectAttributes")
    public BatchListObjectAttributesResponse listObjectAttributes;
    public BatchReadSuccessfulResponse withListObjectAttributes(BatchListObjectAttributesResponse listObjectAttributes) {
        this.listObjectAttributes = listObjectAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListObjectChildren")
    public BatchListObjectChildrenResponse listObjectChildren;
    public BatchReadSuccessfulResponse withListObjectChildren(BatchListObjectChildrenResponse listObjectChildren) {
        this.listObjectChildren = listObjectChildren;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListObjectParentPaths")
    public BatchListObjectParentPathsResponse listObjectParentPaths;
    public BatchReadSuccessfulResponse withListObjectParentPaths(BatchListObjectParentPathsResponse listObjectParentPaths) {
        this.listObjectParentPaths = listObjectParentPaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListObjectParents")
    public BatchListObjectParentsResponse listObjectParents;
    public BatchReadSuccessfulResponse withListObjectParents(BatchListObjectParentsResponse listObjectParents) {
        this.listObjectParents = listObjectParents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListObjectPolicies")
    public BatchListObjectPoliciesResponse listObjectPolicies;
    public BatchReadSuccessfulResponse withListObjectPolicies(BatchListObjectPoliciesResponse listObjectPolicies) {
        this.listObjectPolicies = listObjectPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListOutgoingTypedLinks")
    public BatchListOutgoingTypedLinksResponse listOutgoingTypedLinks;
    public BatchReadSuccessfulResponse withListOutgoingTypedLinks(BatchListOutgoingTypedLinksResponse listOutgoingTypedLinks) {
        this.listOutgoingTypedLinks = listOutgoingTypedLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListPolicyAttachments")
    public BatchListPolicyAttachmentsResponse listPolicyAttachments;
    public BatchReadSuccessfulResponse withListPolicyAttachments(BatchListPolicyAttachmentsResponse listPolicyAttachments) {
        this.listPolicyAttachments = listPolicyAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LookupPolicy")
    public BatchLookupPolicyResponse lookupPolicy;
    public BatchReadSuccessfulResponse withLookupPolicy(BatchLookupPolicyResponse lookupPolicy) {
        this.lookupPolicy = lookupPolicy;
        return this;
    }
}