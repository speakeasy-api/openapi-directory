import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Api is a top-level description of an API. Apis are produced by producers and are commitments to provide services.
 */
export declare class ApiInput extends SpeakeasyBase {
    /**
     * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
     */
    annotations?: Record<string, string>;
    /**
     * A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g. "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".
     */
    availability?: string;
    /**
     * A detailed description.
     */
    description?: string;
    /**
     * Human-meaningful name.
     */
    displayName?: string;
    /**
     * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.
     */
    labels?: Record<string, string>;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * The recommended deployment of the API. Format: apis/{api}/deployments/{deployment}
     */
    recommendedDeployment?: string;
    /**
     * The recommended version of the API. Format: apis/{api}/versions/{version}
     */
    recommendedVersion?: string;
}
/**
 * An Api is a top-level description of an API. Apis are produced by producers and are commitments to provide services.
 */
export declare class Api extends SpeakeasyBase {
    /**
     * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
     */
    annotations?: Record<string, string>;
    /**
     * A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g. "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".
     */
    availability?: string;
    /**
     * Output only. Creation timestamp.
     */
    createTime?: Date;
    /**
     * A detailed description.
     */
    description?: string;
    /**
     * Human-meaningful name.
     */
    displayName?: string;
    /**
     * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.
     */
    labels?: Record<string, string>;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * The recommended deployment of the API. Format: apis/{api}/deployments/{deployment}
     */
    recommendedDeployment?: string;
    /**
     * The recommended version of the API. Format: apis/{api}/versions/{version}
     */
    recommendedVersion?: string;
    /**
     * Output only. Last update timestamp.
     */
    updateTime?: Date;
}
