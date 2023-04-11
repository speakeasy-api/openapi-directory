import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains configuration information about a CloudFront function.
 */
export declare class CreateFunction20200531RequestBodyFunctionConfig extends SpeakeasyBase {
    comment?: string;
    runtime?: shared.FunctionRuntimeEnum;
}
export declare class CreateFunction20200531RequestBody extends SpeakeasyBase {
    /**
     * The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.
     */
    functionCode: string;
    /**
     * Contains configuration information about a CloudFront function.
     */
    functionConfig: CreateFunction20200531RequestBodyFunctionConfig;
    /**
     * A name to identify the function.
     */
    name: string;
}
export declare class CreateFunction20200531Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
