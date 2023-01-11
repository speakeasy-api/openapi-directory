package openapisdk.models.shared;



/**
 * AssumeRoleWithSamlResponse
 * Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
**/
public class AssumeRoleWithSamlResponse {
    public AssumedRoleUser assumedRoleUser;
    public AssumeRoleWithSamlResponse withAssumedRoleUser(AssumedRoleUser assumedRoleUser) {
        this.assumedRoleUser = assumedRoleUser;
        return this;
    }
    public String audience;
    public AssumeRoleWithSamlResponse withAudience(String audience) {
        this.audience = audience;
        return this;
    }
    public Credentials credentials;
    public AssumeRoleWithSamlResponse withCredentials(Credentials credentials) {
        this.credentials = credentials;
        return this;
    }
    public String issuer;
    public AssumeRoleWithSamlResponse withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    public String nameQualifier;
    public AssumeRoleWithSamlResponse withNameQualifier(String nameQualifier) {
        this.nameQualifier = nameQualifier;
        return this;
    }
    public Long packedPolicySize;
    public AssumeRoleWithSamlResponse withPackedPolicySize(Long packedPolicySize) {
        this.packedPolicySize = packedPolicySize;
        return this;
    }
    public String sourceIdentity;
    public AssumeRoleWithSamlResponse withSourceIdentity(String sourceIdentity) {
        this.sourceIdentity = sourceIdentity;
        return this;
    }
    public String subject;
    public AssumeRoleWithSamlResponse withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    public String subjectType;
    public AssumeRoleWithSamlResponse withSubjectType(String subjectType) {
        this.subjectType = subjectType;
        return this;
    }
}