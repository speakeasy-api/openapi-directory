import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateConfigurationSetActionEnum {
    CreateConfigurationSet = "CreateConfigurationSet"
}
/**
 * <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
 */
export declare class GETCreateConfigurationSetConfigurationSet extends SpeakeasyBase {
    name: string;
}
export declare enum GETCreateConfigurationSetVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETCreateConfigurationSetRequest extends SpeakeasyBase {
    action: GETCreateConfigurationSetActionEnum;
    /**
     * A data structure that contains the name of the configuration set.
     */
    configurationSet: GETCreateConfigurationSetConfigurationSet;
    version: GETCreateConfigurationSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateConfigurationSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
