import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListPoliciesGrantingServiceAccessActionEnum {
    ListPoliciesGrantingServiceAccess = "ListPoliciesGrantingServiceAccess"
}
export declare enum GETListPoliciesGrantingServiceAccessVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETListPoliciesGrantingServiceAccessRequest extends SpeakeasyBase {
    action: GETListPoliciesGrantingServiceAccessActionEnum;
    /**
     * The ARN of the IAM identity (user, group, or role) whose policies you want to list.
     */
    arn: string;
    /**
     * Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the <code>Marker</code> element in the response that you received to indicate where the next call should start.
     */
    marker?: string;
    /**
     * <p>The service namespace for the Amazon Web Services services whose policies you want to list.</p> <p>To learn the service namespace for a service, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html">Actions, resources, and condition keys for Amazon Web Services services</a> in the <i>IAM User Guide</i>. Choose the name of the service to view details for that service. In the first paragraph, find the service prefix. For example, <code>(service prefix: a4b)</code>. For more information about service namespaces, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">Amazon Web Services service namespaces</a> in the <i>Amazon Web Services General Reference</i>.</p>
     */
    serviceNamespaces: string[];
    version: GETListPoliciesGrantingServiceAccessVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListPoliciesGrantingServiceAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
