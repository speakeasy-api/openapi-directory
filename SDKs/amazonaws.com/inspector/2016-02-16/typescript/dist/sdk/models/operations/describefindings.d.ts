import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFindingsXAmzTargetEnum {
    InspectorServiceDescribeFindings = "InspectorService.DescribeFindings"
}
export declare class DescribeFindingsRequest extends SpeakeasyBase {
    describeFindingsRequest: shared.DescribeFindingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFindingsXAmzTargetEnum;
}
export declare class DescribeFindingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFindingsResponse?: shared.DescribeFindingsResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
