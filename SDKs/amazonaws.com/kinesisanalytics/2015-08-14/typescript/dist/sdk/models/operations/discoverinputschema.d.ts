import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DiscoverInputSchemaXAmzTargetEnum {
    KinesisAnalytics20150814DiscoverInputSchema = "KinesisAnalytics_20150814.DiscoverInputSchema"
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
}
