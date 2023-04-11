import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUntagInstanceProfileActionEnum {
    UntagInstanceProfile = "UntagInstanceProfile"
}
export declare enum GETUntagInstanceProfileVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUntagInstanceProfileRequest extends SpeakeasyBase {
    action: GETUntagInstanceProfileActionEnum;
    /**
     * <p>The name of the IAM instance profile from which you want to remove tags.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    instanceProfileName: string;
    /**
     * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified instance profile.
     */
    tagKeys: string[];
    version: GETUntagInstanceProfileVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUntagInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
