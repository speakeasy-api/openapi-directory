import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum {
    AmazonSSMDescribeEffectivePatchesForPatchBaseline = "AmazonSSM.DescribeEffectivePatchesForPatchBaseline"
}
export declare class DescribeEffectivePatchesForPatchBaselineRequest extends SpeakeasyBase {
    describeEffectivePatchesForPatchBaselineRequest: shared.DescribeEffectivePatchesForPatchBaselineRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEffectivePatchesForPatchBaselineXAmzTargetEnum;
}
export declare class DescribeEffectivePatchesForPatchBaselineResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEffectivePatchesForPatchBaselineResult?: shared.DescribeEffectivePatchesForPatchBaselineResult;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidResourceId
     */
    invalidResourceId?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperatingSystem
     */
    unsupportedOperatingSystem?: any;
}
