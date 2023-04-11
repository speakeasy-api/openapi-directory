import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum UntagResource20181105OperationEnum {
    Untag = "Untag"
}
/**
 *  A complex type that contains zero or more <code>Tag</code> elements.
 */
export declare class UntagResource20181105RequestBodyTagKeys extends SpeakeasyBase {
    items?: string[];
}
export declare class UntagResource20181105RequestBody extends SpeakeasyBase {
    /**
     *  A complex type that contains zero or more <code>Tag</code> elements.
     */
    tagKeys: UntagResource20181105RequestBodyTagKeys;
}
export declare class UntagResource20181105Request extends SpeakeasyBase {
    operation: UntagResource20181105OperationEnum;
    requestBody: Uint8Array;
    /**
     *  An ARN of a CloudFront resource.
     */
    resource: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagResource20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
