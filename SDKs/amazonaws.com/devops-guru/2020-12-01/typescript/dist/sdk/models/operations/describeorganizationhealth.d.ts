import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeOrganizationHealthRequestBody extends SpeakeasyBase {
    /**
     * The ID of the Amazon Web Services account.
     */
    accountIds?: string[];
    /**
     * The ID of the organizational unit.
     */
    organizationalUnitIds?: string[];
}
export declare class DescribeOrganizationHealthRequest extends SpeakeasyBase {
    requestBody: DescribeOrganizationHealthRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeOrganizationHealthResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeOrganizationHealthResponse?: shared.DescribeOrganizationHealthResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
