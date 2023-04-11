import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSeverityLevelsXAmzTargetEnum {
    AWSSupport20130415DescribeSeverityLevels = "AWSSupport_20130415.DescribeSeverityLevels"
}
export declare class DescribeSeverityLevelsRequest extends SpeakeasyBase {
    describeSeverityLevelsRequest: shared.DescribeSeverityLevelsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSeverityLevelsXAmzTargetEnum;
}
export declare class DescribeSeverityLevelsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSeverityLevelsResponse?: shared.DescribeSeverityLevelsResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
