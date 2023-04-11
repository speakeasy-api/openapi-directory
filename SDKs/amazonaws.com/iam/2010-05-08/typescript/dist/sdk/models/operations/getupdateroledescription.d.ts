import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUpdateRoleDescriptionActionEnum {
    UpdateRoleDescription = "UpdateRoleDescription"
}
export declare enum GETUpdateRoleDescriptionVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETUpdateRoleDescriptionRequest extends SpeakeasyBase {
    action: GETUpdateRoleDescriptionActionEnum;
    /**
     * The new description that you want to apply to the specified role.
     */
    description: string;
    /**
     * The name of the role that you want to modify.
     */
    roleName: string;
    version: GETUpdateRoleDescriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateRoleDescriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
