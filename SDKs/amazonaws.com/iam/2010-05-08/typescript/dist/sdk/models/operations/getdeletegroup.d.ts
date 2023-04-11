import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteGroupActionEnum {
    DeleteGroup = "DeleteGroup"
}
export declare enum GETDeleteGroupVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETDeleteGroupRequest extends SpeakeasyBase {
    action: GETDeleteGroupActionEnum;
    /**
     * <p>The name of the IAM group to delete.</p> <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
     */
    groupName: string;
    version: GETDeleteGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
