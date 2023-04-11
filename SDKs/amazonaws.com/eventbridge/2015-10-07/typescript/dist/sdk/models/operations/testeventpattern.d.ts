import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TestEventPatternXAmzTargetEnum {
    AWSEventsTestEventPattern = "AWSEvents.TestEventPattern"
}
export declare class TestEventPatternRequest extends SpeakeasyBase {
    testEventPatternRequest: shared.TestEventPatternRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TestEventPatternXAmzTargetEnum;
}
export declare class TestEventPatternResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidEventPatternException
     */
    invalidEventPatternException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    testEventPatternResponse?: shared.TestEventPatternResponse;
}
