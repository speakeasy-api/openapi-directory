import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeAddonVersionsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>.
     */
    addonName?: string;
    /**
     * The Kubernetes versions that you can use the add-on with.
     */
    kubernetesVersion?: string;
    /**
     * The maximum number of results to return.
     */
    maxResults?: number;
    /**
     * <p>The <code>nextToken</code> value returned from a previous paginated <code>DescribeAddonVersionsRequest</code> where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
     */
    nextToken?: string;
    /**
     * The owner of the add-on. For valid <code>owners</code>, don't specify a value for this property.
     */
    owners?: string[];
    /**
     * The publisher of the add-on. For valid <code>publishers</code>, don't specify a value for this property.
     */
    publishers?: string[];
    /**
     * The type of the add-on. For valid <code>types</code>, don't specify a value for this property.
     */
    types?: string[];
}
export declare class DescribeAddonVersionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAddonVersionsResponse?: shared.DescribeAddonVersionsResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
