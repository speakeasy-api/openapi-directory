import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteRoleActionEnum {
    DeleteRole = "DeleteRole"
}
export declare enum GETDeleteRoleVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteRoleRequest extends SpeakeasyBase {
    action: GETDeleteRoleActionEnum;
    /**
     * <p>The name of the role to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    roleName: string;
    version: GETDeleteRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
