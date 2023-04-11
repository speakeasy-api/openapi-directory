import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeactivateTypeActionEnum {
    DeactivateType = "DeactivateType"
}
/**
 * <p>The extension type.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
 */
export declare enum GETDeactivateTypeTypeEnum {
    Resource = "RESOURCE",
    Module = "MODULE",
    Hook = "HOOK"
}
export declare enum GETDeactivateTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDeactivateTypeRequest extends SpeakeasyBase {
    action: GETDeactivateTypeActionEnum;
    /**
     * <p>The Amazon Resource Name (ARN) for the extension, in this account and region.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
     */
    arn?: string;
    /**
     * <p>The extension type.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
     */
    type?: GETDeactivateTypeTypeEnum;
    /**
     * <p>The type name of the extension, in this account and region. If you specified a type name alias when enabling the extension, use the type name alias.</p> <p>Conditional: You must specify either <code>Arn</code>, or <code>TypeName</code> and <code>Type</code>.</p>
     */
    typeName?: string;
    version: GETDeactivateTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeactivateTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
