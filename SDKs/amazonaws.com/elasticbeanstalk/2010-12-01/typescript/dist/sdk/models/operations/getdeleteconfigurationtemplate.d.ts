import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteConfigurationTemplateActionEnum {
    DeleteConfigurationTemplate = "DeleteConfigurationTemplate"
}
export declare enum GETDeleteConfigurationTemplateVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeleteConfigurationTemplateRequest extends SpeakeasyBase {
    action: GETDeleteConfigurationTemplateActionEnum;
    /**
     * The name of the application to delete the configuration template from.
     */
    applicationName: string;
    /**
     * The name of the configuration template to delete.
     */
    templateName: string;
    version: GETDeleteConfigurationTemplateVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteConfigurationTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
