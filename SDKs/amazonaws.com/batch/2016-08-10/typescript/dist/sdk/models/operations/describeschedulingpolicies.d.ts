import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeSchedulingPoliciesRequestBody extends SpeakeasyBase {
    /**
     * A list of up to 100 scheduling policy Amazon Resource Name (ARN) entries.
     */
    arns: string[];
}
export declare class DescribeSchedulingPoliciesRequest extends SpeakeasyBase {
    requestBody: DescribeSchedulingPoliciesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSchedulingPoliciesResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeSchedulingPoliciesResponse?: shared.DescribeSchedulingPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
}
