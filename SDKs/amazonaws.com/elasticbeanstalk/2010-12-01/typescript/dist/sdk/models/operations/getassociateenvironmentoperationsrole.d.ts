import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssociateEnvironmentOperationsRoleActionEnum {
    AssociateEnvironmentOperationsRole = "AssociateEnvironmentOperationsRole"
}
export declare enum GETAssociateEnvironmentOperationsRoleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETAssociateEnvironmentOperationsRoleRequest extends SpeakeasyBase {
    action: GETAssociateEnvironmentOperationsRoleActionEnum;
    /**
     * The name of the environment to which to set the operations role.
     */
    environmentName: string;
    /**
     * The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.
     */
    operationsRole: string;
    version: GETAssociateEnvironmentOperationsRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssociateEnvironmentOperationsRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
