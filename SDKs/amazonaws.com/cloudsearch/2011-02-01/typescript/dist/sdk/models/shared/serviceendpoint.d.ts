import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The endpoint to which service requests can be submitted, including the actual URL prefix for sending requests and the Amazon Resource Name (ARN) so the endpoint can be referenced in other API calls such as <a>UpdateServiceAccessPolicies</a>.
 */
export declare class ServiceEndpoint extends SpeakeasyBase {
    /**
     * An Amazon Resource Name (ARN). See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
     */
    arn?: string;
    /**
     * The URL (including /version/pathPrefix) to which service requests can be submitted.
     */
    endpoint?: string;
}
