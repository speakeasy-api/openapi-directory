import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The stage of the function that you are testing, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
 */
export declare enum TestFunction20200531RequestBodyStageEnum {
    Development = "DEVELOPMENT",
    Live = "LIVE"
}
export declare class TestFunction20200531RequestBody extends SpeakeasyBase {
    /**
     * The event object to test the function with. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.
     */
    eventObject: string;
    /**
     * The stage of the function that you are testing, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
     */
    stage?: TestFunction20200531RequestBodyStageEnum;
}
export declare class TestFunction20200531Request extends SpeakeasyBase {
    /**
     * The current version (<code>ETag</code> value) of the function that you are testing, which you can get using <code>DescribeFunction</code>.
     */
    ifMatch: string;
    /**
     * The name of the function that you are testing.
     */
    name: string;
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
