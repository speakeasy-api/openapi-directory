import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DiscoverInputSchemaXAmzTargetEnum {
    KinesisAnalytics20180523DiscoverInputSchema = "KinesisAnalytics_20180523.DiscoverInputSchema"
}
export declare class DiscoverInputSchemaRequest extends SpeakeasyBase {
    discoverInputSchemaRequest: shared.DiscoverInputSchemaRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DiscoverInputSchemaXAmzTargetEnum;
}
export declare class DiscoverInputSchemaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    discoverInputSchemaResponse?: shared.DiscoverInputSchemaResponse;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceProvisionedThroughputExceededException
     */
    resourceProvisionedThroughputExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * UnableToDetectSchemaException
     */
    unableToDetectSchemaException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
