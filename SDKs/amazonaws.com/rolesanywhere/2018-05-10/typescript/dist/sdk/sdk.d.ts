import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://rolesanywhere.{region}.amazonaws.com", "https://rolesanywhere.{region}.amazonaws.com", "http://rolesanywhere.{region}.amazonaws.com.cn", "https://rolesanywhere.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>AWS Identity and Access Management Roles Anywhere provides a secure way for your workloads such as servers, containers, and applications running outside of AWS to obtain Temporary AWS credentials. Your workloads can use the same IAM policies and roles that you have configured with native AWS applications to access AWS resources. Using IAM Roles Anywhere will eliminate the need to manage long term credentials for workloads running outside of AWS.</p> <p>To use IAM Roles Anywhere customer workloads will need to use X.509 certificates issued by their Certificate Authority (CA) . The Certificate Authority (CA) needs to be registered with IAM Roles Anywhere as a trust anchor to establish trust between customer PKI and IAM Roles Anywhere. Customers who do not manage their own PKI system can use AWS Certificate Manager Private Certificate Authority (ACM PCA) to create a Certificate Authority and use that to establish trust with IAM Roles Anywhere</p> <p>This guide describes the IAM rolesanywhere operations that you can call programmatically. For general information about IAM Roles Anywhere see <a href="https://docs.aws.amazon.com/">https://docs.aws.amazon.com/</a> </p>
 *
 * @see {@link https://docs.aws.amazon.com/rolesanywhere/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Creates a profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can intersect permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateProfile</code>. </p>
     */
    createProfile(req: operations.CreateProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateProfileResponse>;
    /**
     * <p>Creates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateTrustAnchor</code>. </p>
     */
    createTrustAnchor(req: operations.CreateTrustAnchorRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrustAnchorResponse>;
    /**
     * <p>Deletes a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteCrl</code>. </p>
     */
    deleteCrl(req: operations.DeleteCrlRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCrlResponse>;
    /**
     * <p>Deletes a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteProfile</code>. </p>
     */
    deleteProfile(req: operations.DeleteProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileResponse>;
    /**
     * <p>Deletes a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteTrustAnchor</code>. </p>
     */
    deleteTrustAnchor(req: operations.DeleteTrustAnchorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrustAnchorResponse>;
    /**
     * <p>Disables a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableCrl</code>. </p>
     */
    disableCrl(req: operations.DisableCrlRequest, config?: AxiosRequestConfig): Promise<operations.DisableCrlResponse>;
    /**
     * <p>Disables a profile. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile fail.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableProfile</code>. </p>
     */
    disableProfile(req: operations.DisableProfileRequest, config?: AxiosRequestConfig): Promise<operations.DisableProfileResponse>;
    /**
     * <p>Disables a trust anchor. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests specifying this trust anchor are unauthorized.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableTrustAnchor</code>. </p>
     */
    disableTrustAnchor(req: operations.DisableTrustAnchorRequest, config?: AxiosRequestConfig): Promise<operations.DisableTrustAnchorResponse>;
    /**
     * <p>Enables a certificate revocation list (CRL). When enabled, certificates stored in the CRL are unauthorized to receive session credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableCrl</code>. </p>
     */
    enableCrl(req: operations.EnableCrlRequest, config?: AxiosRequestConfig): Promise<operations.EnableCrlResponse>;
    /**
     * <p>Enables the roles in a profile to receive session credentials in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableProfile</code>. </p>
     */
    enableProfile(req: operations.EnableProfileRequest, config?: AxiosRequestConfig): Promise<operations.EnableProfileResponse>;
    /**
     * <p>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableTrustAnchor</code>. </p>
     */
    enableTrustAnchor(req: operations.EnableTrustAnchorRequest, config?: AxiosRequestConfig): Promise<operations.EnableTrustAnchorResponse>;
    /**
     * <p>Gets a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetCrl</code>. </p>
     */
    getCrl(req: operations.GetCrlRequest, config?: AxiosRequestConfig): Promise<operations.GetCrlResponse>;
    /**
     * <p>Gets a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetProfile</code>. </p>
     */
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * <p>Gets a Subject. A Subject associates a certificate identity with authentication attempts by CreateSession. The Subject resources stores audit information such as status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetSubject</code>. </p>
     */
    getSubject(req: operations.GetSubjectRequest, config?: AxiosRequestConfig): Promise<operations.GetSubjectResponse>;
    /**
     * <p>Gets a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetTrustAnchor</code>. </p>
     */
    getTrustAnchor(req: operations.GetTrustAnchorRequest, config?: AxiosRequestConfig): Promise<operations.GetTrustAnchorResponse>;
    /**
     * <p>Imports the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:ImportCrl</code>. </p>
     */
    importCrl(req: operations.ImportCrlRequest, config?: AxiosRequestConfig): Promise<operations.ImportCrlResponse>;
    /**
     * <p>Lists all Crls in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListCrls</code>. </p>
     */
    listCrls(req: operations.ListCrlsRequest, config?: AxiosRequestConfig): Promise<operations.ListCrlsResponse>;
    /**
     * <p>Lists all profiles in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListProfiles</code>. </p>
     */
    listProfiles(req: operations.ListProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListProfilesResponse>;
    /**
     * <p>Lists the subjects in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListSubjects</code>. </p>
     */
    listSubjects(req: operations.ListSubjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListSubjectsResponse>;
    /**
     * <p>Lists the tags attached to the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTagsForResource</code>. </p>
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTrustAnchors</code>. </p>
     */
    listTrustAnchors(req: operations.ListTrustAnchorsRequest, config?: AxiosRequestConfig): Promise<operations.ListTrustAnchorsResponse>;
    /**
     * <p>Attaches tags to a resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:TagResource</code>. </p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Removes tags from the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UntagResource</code>. </p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateCrl</code>. </p>
     */
    updateCrl(req: operations.UpdateCrlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCrlResponse>;
    /**
     * <p>Updates the profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can scope-down permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateProfile</code>. </p>
     */
    updateProfile(req: operations.UpdateProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileResponse>;
    /**
     * <p>Updates the trust anchor.You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateTrustAnchor</code>. </p>
     */
    updateTrustAnchor(req: operations.UpdateTrustAnchorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrustAnchorResponse>;
}
