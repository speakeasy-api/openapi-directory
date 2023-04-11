import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETChangePasswordActionEnum {
    ChangePassword = "ChangePassword"
}
export declare enum GETChangePasswordVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETChangePasswordRequest extends SpeakeasyBase {
    action: GETChangePasswordActionEnum;
    /**
     * <p>The new password. The new password must conform to the Amazon Web Services account's password policy, if one exists.</p> <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a> that is used to validate this parameter is a string of characters. That string can include almost any printable ASCII character from the space (<code>\u0020</code>) through the end of the ASCII character range (<code>\u00FF</code>). You can also include the tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>) characters. Any of these characters are valid in a password. However, many tools, such as the Amazon Web Services Management Console, might restrict the ability to type certain characters because they have special meaning within that tool.</p>
     */
    newPassword: string;
    /**
     * The IAM user's current password.
     */
    oldPassword: string;
    version: GETChangePasswordVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETChangePasswordResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
