import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssociateEnclaveCertificateIamRoleActionEnum {
    AssociateEnclaveCertificateIamRole = "AssociateEnclaveCertificateIamRole"
}
export declare enum POSTAssociateEnclaveCertificateIamRoleVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAssociateEnclaveCertificateIamRoleRequest extends SpeakeasyBase {
    action: POSTAssociateEnclaveCertificateIamRoleActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssociateEnclaveCertificateIamRoleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssociateEnclaveCertificateIamRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
