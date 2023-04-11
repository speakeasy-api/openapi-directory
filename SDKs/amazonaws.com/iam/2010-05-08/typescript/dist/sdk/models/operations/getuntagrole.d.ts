import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUntagRoleActionEnum {
    UntagRole = "UntagRole"
}
export declare enum GETUntagRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUntagRoleRequest extends SpeakeasyBase {
    action: GETUntagRoleActionEnum;
    /**
     * <p>The name of the IAM role from which you want to remove tags.</p> <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    roleName: string;
    /**
     * A list of key names as a simple array of strings. The tags with matching keys are removed from the specified role.
     */
    tagKeys: string[];
    version: GETUntagRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUntagRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
