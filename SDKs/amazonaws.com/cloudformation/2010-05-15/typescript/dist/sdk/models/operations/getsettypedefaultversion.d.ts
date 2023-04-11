import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetTypeDefaultVersionActionEnum {
    SetTypeDefaultVersion = "SetTypeDefaultVersion"
}
/**
 * <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
 */
export declare enum GETSetTypeDefaultVersionTypeEnum {
    Resource = "RESOURCE",
    Module = "MODULE",
    Hook = "HOOK"
}
export declare enum GETSetTypeDefaultVersionVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETSetTypeDefaultVersionRequest extends SpeakeasyBase {
    action: GETSetTypeDefaultVersionActionEnum;
    /**
     * <p>The Amazon Resource Name (ARN) of the extension for which you want version summary information.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
     */
    arn?: string;
    /**
     * <p>The kind of extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
     */
    type?: GETSetTypeDefaultVersionTypeEnum;
    /**
     * <p>The name of the extension.</p> <p>Conditional: You must specify either <code>TypeName</code> and <code>Type</code>, or <code>Arn</code>.</p>
     */
    typeName?: string;
    version: GETSetTypeDefaultVersionVersionEnum;
    /**
     * The ID of a specific version of the extension. The version ID is the value at the end of the Amazon Resource Name (ARN) assigned to the extension version when it is registered.
     */
    versionId?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetTypeDefaultVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
