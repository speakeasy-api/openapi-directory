import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TestSegmentPatternRequestBody extends SpeakeasyBase {
    /**
     * The pattern to test.
     */
    pattern: string;
    /**
     * A sample <code>evaluationContext</code> JSON block to test against the specified pattern.
     */
    payload: string;
}
export declare class TestSegmentPatternRequest extends SpeakeasyBase {
    requestBody: TestSegmentPatternRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestSegmentPatternResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    testSegmentPatternResponse?: shared.TestSegmentPatternResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
