import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeEnvironmentsActionEnum {
    DescribeEnvironments = "DescribeEnvironments"
}
export declare enum GETDescribeEnvironmentsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeEnvironmentsRequest extends SpeakeasyBase {
    action: GETDescribeEnvironmentsActionEnum;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application.
     */
    applicationName?: string;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs.
     */
    environmentIds?: string[];
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names.
     */
    environmentNames?: string[];
    /**
     * <p>Indicates whether to include deleted environments:</p> <p> <code>true</code>: Environments that have been deleted after <code>IncludedDeletedBackTo</code> are displayed.</p> <p> <code>false</code>: Do not include deleted environments.</p>
     */
    includeDeleted?: boolean;
    /**
     *  If specified when <code>IncludeDeleted</code> is set to <code>true</code>, then environments deleted after this date are displayed.
     */
    includedDeletedBackTo?: Date;
    /**
     * <p>For a paginated request. Specify a maximum number of environments to include in each response.</p> <p>If no <code>MaxRecords</code> is specified, all available environments are retrieved in a single response.</p>
     */
    maxRecords?: number;
    /**
     * <p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
     */
    nextToken?: string;
    version: GETDescribeEnvironmentsVersionEnum;
    /**
     * If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version.
     */
    versionLabel?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeEnvironmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
